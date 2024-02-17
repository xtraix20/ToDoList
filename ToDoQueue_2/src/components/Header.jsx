//import React from 'react'
import rick from '../assets/rm.svg'
import todo from '../assets/todo.svg'
import '../styles/Header.sass'

const Header =()=> {
  return (
      <>
              
      <div className='uno'>
        <div className='container'>
        
           <div className='Logo' id= "to-do-logo" > 
            <a href="/todo " target = "blank"> 
             <img src= {todo} className='LogoToDo' alt= "to do list" ></img></a> 
            
            <p className='Title'> ToDoList </p>
            </div>
            
            <div className='Logo'><h1 className='Title' id="DoTo">Do To Queue </h1></div>
          <div className='Logo' id= "rick"> 
            <a href="/RMCharacter" target ="blank">
             <img src = {rick}className='rick' alt = "rick" ></img> </a>
             
           <p className='Title5'> Rick and morty API </p>
          
           
            </div>
          
            

      </div>
      </div>
      </>
  )
}

export default Header