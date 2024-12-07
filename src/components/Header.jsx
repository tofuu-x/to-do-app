export default function Header(props){
  const {todos}=props;
  const todosLength=todos.length
  const tasksOrTasks=todosLength>1?'tasks':'task';
  return(
    <header>
      <h1 className="text-gradient">You have {todosLength} open {tasksOrTasks}.</h1>
    </header>
  )
}