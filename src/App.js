import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import ListElement from './ListElement'
import './Style.css'

export default function App() {

  const [user,setUser]=useState([])


  const getApi= async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUser(response.data)
  }

  useEffect(()=>{
    getApi()
    
  },[])
  
  return (

    <div className='box'>
      <ul>
        
              {user.map((users,id)=>(

                    <li className='element'>
                      <div className='photo'></div>
                      <ListElement users={users} key={id}/>
                    </li>
          
              ))}
        
      </ul>
    </div>
  )
}


// https://jsonplaceholder.typicode.com/users

