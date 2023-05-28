import React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbarpage from './Navbar/Navbarpage';
import Login  from "./UserLogin/Login"
import Signup from './UserLogin/Signup';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbarpage/>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App