export default function TodoCard(props){
  const {todo,handleDeleteTodo,todoIndex,handleCompleteTodo,handleEditTodo}=props;
  
  return(
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='todo-buttons'>
        <button className='edit-todo' disabled={todo.complete} onClick={()=>handleEditTodo(todo)}>
          <h6>Edit</h6>
        </button>
        <button onClick={()=>handleCompleteTodo(todo)} disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>{
          handleDeleteTodo(todo)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}