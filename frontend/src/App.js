
import {React, useState, useEffect} from 'react'
import BasicCard from './components/Cards'
// import BasicPagination from './components/pagination'
import DrawerAppBar from './components/Navbar'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import your route components too

import About from './components/About'
export default function App(){
  
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/todos/')
    .then((res) => res.json())
    .then((result) =>{
      setIsLoaded(true);
      setItems(result);

    },
    ((error)=>{
      setIsLoaded(true);
      setError(error);

    })
    );
  })
  if (error){
    return (
      <p>Error: {error.message}</p>
    )
  }
  else if (!isLoaded){
    return (
      <p>loading...</p>
    )
  }
  return (
    <div>
     <DrawerAppBar/>
     
      {items.map((item) =>(
         <div className='car' key = {item.id} >
      <br/>
      
         <BasicCard 
         title = {item.title} 
         desc ={item.description} />
         </div>
      )
       
      )}
      
    </div>

    
    
  )
}

<Route path="teams/new" element={<About />} />