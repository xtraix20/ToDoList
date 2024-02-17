import { useEffect } from 'react'
import '../styles/ToDoList.sass'
import { logicaToDoList } from '../styles/MainF';
const ToDoList = () => {
  useEffect(()=>{
    logicaToDoList();
  },[]);
  return (
    <div className='container4'> 
    <div className="ToDoList">
      <div className='xd'> 
     
          <p className='Text'> To Do List </p>
          <input type="text" id ="tarea"></input>
          <button className='btn-add' id = "add"> Añadir </button>
          <h3 className='Text2'> Tareas  pendientes: ‎ ‎ ‎ <span id ="cantidad"> 0 </span></h3>

          <ul id = "listado"> </ul>
          </div>

    </div>
    </div>
  )
}

export default ToDoList