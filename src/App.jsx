import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import {useState,useEffect} from 'react';

function App(){
  // const todos = [
  //     { input: 'Hello! Add your first todo!', complete: true },
  //     { input: 'Get the groceries!', complete: false },
  //     { input: 'Learn how to web design', complete: false },
  //     { input: 'Say hi to gran gran', complete: true },
  //   ]

  
  
  const [todos,setTodos]=useState([
    
  ])
  
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
      <TodoList selectedTab={selectedTab}todos={todos} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>


    </>
  )
}

export default App;