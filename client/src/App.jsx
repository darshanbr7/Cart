import React from 'react'
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbarpage from './Navbar/Navbarpage';
import Login  from "./UserLogin/Login"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbarpage/>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App