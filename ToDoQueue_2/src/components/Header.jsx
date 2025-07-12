//import React from 'react'
import { Link } from 'react-router-dom'
import rick from '../assets/rm.svg'
import todo from '../assets/todo.svg'
import '../styles/Header.sass'
const Header =()=> {
  return (
      <>
      <div className='uno'>
        <div className='container'>
           <div className='Logo' id= "to-do-logo" >
            <Link to="/todo">
             <img src= {todo} className='LogoToDo' alt= "to do list" ></img></Link>
            <p className='Title'> ToDoList </p>
            </div>
            <div className='Logo'><h1 className='Title' id="DoTo">Do To Queue </h1></div>
          <div className='Logo' id= "rick">
            <Link to="/RMCharacter">
             <img src = {rick}className='rick' alt = "rick" ></img> </Link>
           <p className='Title5'> Rick and morty API </p>
            </div>
      </div>
      </div>
      </>
  )
}
export default Header
