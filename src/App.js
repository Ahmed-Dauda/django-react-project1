import Home from './components/Home'
import BlogListView from './components/BlogListView'

// import BasicPagination from './components/pagination'
import DrawerAppBar from './components/Navbar'
import About from './components/About'

import {

  Routes,
  Route,
  Link,
} from "react-router-dom";
// import your route components too



export default function App(){

  return (
   
    <div>
     <DrawerAppBar 
     home = {<Link to="/">Home</Link>}
     about = {<Link to="/about">About</Link>}
     blog  = {<Link to="/BlogListView">Blog</Link>}
     />
    
    <Routes>
      <Route  path="/"  element ={<Home/>}></Route>
      <Route  path="/about" element ={<About />}></Route>
      <Route  path="/BlogListView" element ={<BlogListView />}></Route>
    </Routes>
      
    </div>

  )
}

