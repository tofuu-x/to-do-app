import {useState} from 'react'

export default function TodoInput(props){
  const {handleAddTodo,inputValue,setInputValue,editing}=props;
  


  return(
    <div className="input-container">
      <input placeholder="Add Task" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={()=>{
        if (!inputValue){return}
        handleAddTodo(inputValue);
        setInputValue('');
        }}>
        <i className="fa-solid fa-plus"></i>
      </button>

    </div>
  )
}