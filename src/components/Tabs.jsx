export default function Tabs(props){
  const {todos,selectedTab,setSelectedTab}=props;

  const tabs=['All','Open','Completed']


  return(
    <nav className="tab-container">
      {tabs.map((tab,index)=>{
        const numOfTask=tab==='All'?
            todos.length:
            tab==='Open'?
            todos.filter((task)=>task.complete===false).length:
            todos.filter((task)=>task.complete===true).length

          return(<button onClick={()=>{
            setSelectedTab(tab);
          }}key={index} className={"tab-button "+(tab===selectedTab ? 'tab-selected': '')}>
            <h4>{tab} <span>({numOfTask})</span></h4>
          </button>
        )
      })}
      <hr></hr>
    </nav>
  )
}