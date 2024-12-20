import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useState,useEffect} from 'react';

function App(){
  const [editing,setediting]=useState(false)

  const [todos,setTodos]=useState([
    
  ])
  
  const [inputValue,setInputValue]=useState('')

  const [selectedTab, setSelectedTab]=useState('Open')

  function handleAddTodo(newTodo){
    const newTodoItem={id:Date.now(),input:newTodo,complete:false}
    setTodos(prev=>{
      const updatedTodos=[...prev,newTodoItem];
      handleSaveData(updatedTodos);
      return updatedTodos;
    })
  }

  function handleCompleteTodo(todo) {
    const newTodoList = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, complete: true }; // Ensure you're creating a new object here
      }
      return t; // Leave other todos unchanged
    });
  
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(todo){
    let newTodoList = todos.filter((t) =>  t.id !== todo.id
    )
    setTodos(newTodoList)
    handleSaveData();
  }

  function changeEditing(){
    setediting(false)
  }

  function handleEditTodo(todo){
    let newTodoList=[...todos];
    const editTodo=newTodoList.find((t)=>t.id===todo.id);
    if(editTodo){
      setInputValue(editTodo.input);
      newTodoList=newTodoList.filter((t)=>t.id!==todo.id)
      setediting(true)
      setTodos(newTodoList);
    }
    
  }

  function handleSaveData(todosToSave){
    console.log("Saving todos to localStorage",todosToSave)
    localStorage.setItem('todo-app',JSON.stringify({todos:todosToSave}));
  }

  useEffect(()=>{
    if (!localStorage || !localStorage.getItem('todo-app')){return}
  
    let db=JSON.parse(localStorage.getItem('todo-app'))

    if (db && db.todos){
      setTodos(db.todos);
    }
    
  },[])

  


  return(
    <>

      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList selectedTab={selectedTab}todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} handleEditTodo={handleEditTodo}/>
      <TodoInput handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} editing={editing}/>


    </>
  )
}

export default App;