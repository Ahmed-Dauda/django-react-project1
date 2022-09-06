
import {React, useState, useEffect} from 'react'
import BasicCard from './components/Cards'
// import BasicPagination from './components/pagination'
import DrawerAppBar from './components/Navbar'

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
         <div className='car'>
      <br/>
      
         <BasicCard 
         title = {item.title} 
         desc ={item.description} />
         </div>
      )
       
      )}
      {/* <>
      <BasicPagination/>
      </> */}
    </div>
    
  )
}