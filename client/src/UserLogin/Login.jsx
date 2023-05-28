import React from 'react'
import {RiAccountPinCircleLine} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"
import {MdPassword} from "react-icons/md"
import {Link} from "react-router-dom"
import "./Login.css"
const Tlogin = () => {
  return (
    <>
    <div className='login'>
    
      <form action="">
      <center>
               <div >
                <label ><RiAccountPinCircleLine size={25} color='brown'/>  </label>
                <input type="text"  className='form-box '  autoComplete='off' placeholder='Name '/>
                </div>
                <div>
                <label ><HiOutlineMail size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Email '/>
                </div>
                <div>
                <label ><MdPassword size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Password'/>
                </div>
                <button className="btn btn-danger mt-3">Login</button>
                </center>
                <p className='paragraph'>new  User ?  <Link to={"/Signup"} color={"white"}>Register</Link></p>   
                </form>                
          </div>
    </>
  )
}

export default Tlogin
