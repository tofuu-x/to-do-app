import TodoCard from "./TodoCard";

export default function TodoList(props){
  const {todos,selectedTab}=props
  const tab=selectedTab;
  const filteredTodosList=tab==='All'?
        todos:
        tab==='Completed'?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)
  return(
    <>
      {filteredTodosList.map((todo,todoIndex)=>{
        return(
          <TodoCard key={todoIndex} todo={todo} todoIndex={todoIndex}
          {...props}/>
        )
      })}
      
    </>
  )
}