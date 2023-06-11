import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[todolist,settodolist]= useState([]);
  const[newtask,setnewtask]= useState("");

  const addnew = (event) => {
       setnewtask(event.target.value)
  }
  const addtask = () =>{
       const taskid ={
        id:Math.floor(Math.random()*1000),
        taskname:newtask
       }
       const newlist = [...todolist,taskid]
       settodolist(newlist)
  }
  const deletetask = (id) =>{
      const newlist = todolist.filter((task)=>{
      return task.id !== id
    })
    settodolist(newlist)
  }
  useEffect(()=>{
    localStorage.setItem('todolist', JSON.stringify(todolist));
  },[todolist])


  return (
  <React.Fragment>
   <div className='inputbox'>
    <input type='text' onChange={addnew}/>
    <button onClick={addtask}><i class="fa-solid fa-plus"></i></button>
   </div>

   <div className='list'>
    <h3>TODOLIST</h3>
      {todolist.map((task)=>{
       return <div><p>{task.taskname}</p>
       <button onClick={()=>deletetask(task.id)}><i class="fa-solid fa-trash"></i></button>
       <button><i class="fa-solid fa-pen"></i></button>
       </div> 
      })}
   </div>





  </React.Fragment>
  );
}

export default App;
