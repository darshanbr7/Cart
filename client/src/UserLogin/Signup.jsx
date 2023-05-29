import React from 'react'
import {RiAccountPinCircleLine} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"
import {MdPassword} from "react-icons/md"
import {BsPersonFillExclamation} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"
import "./Signup.css"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"


const Signup = () => {
    const navigate=useNavigate()
    const[name,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[password,setPassowrd]=React.useState("")
    const[role,setRole]=React.useState("")
    const[address,setAddress]=React.useState("")
    const[check,setcheck]=React.useState(false)
    const submitHandler=(e)=>{
        e.preventDefault()
       axios.post("http://localhost:3090/api/user/register",{
                                                                name:name,
                                                                email:email,
                                                                password:password,
                                                                role:role,
                                                                address:address
       })
            .then((res)=>{
                
                console.log(res)
                console.log("data sent succesfully")
                const {err}=res.data.errors
                if(err){
                    alert(err.message)
                    console.log(err)
                }else{
                    navigate("/login")
                }
               
            })
            .catch((err)=>{
               console.log(err)
            })
    }
  return (
   <>
   <section className='signup'>
    <div className="container ">
        
            <form onSubmit={submitHandler} >
            <center>
                <div>
                <label ><RiAccountPinCircleLine size={25} color='brown'/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Name ' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                <label ><HiOutlineMail size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                <label ><MdPassword size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Password' value={password} onChange={(e)=>{setPassowrd(e.target.value)}}/>
                </div>
                <div>
                    <label ><BsPersonFillExclamation size={25}/>  </label>                  
                    <select value={role} onChange={(e)=>{setRole(e.target.value)}} className='dropbtn'>
                        <option value=""></option>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="transporter">Transporter</option>
                        </select>
                        {
                          role===""? <p style={{color:"red"}}>Please Select the role</p>   :<></>
                        }
                </div>
                <div>
                    <label ><FaMapMarkerAlt size={25}/>  </label>
                    <input type="text"  className='form-box'  autoComplete='off' placeholder='Address' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                </center>
                <div className='checkbox'>
                <input type="checkbox" className='form-check-lg'  onChange={(e)=>{setcheck(e.target.checked)}} /><p> Please Accept the Terms and Condition</p>
                </div>
                <center>
                <button className='btn btn-primary'  disabled={!check}>Register</button>
                </center>
                <p className='paragraph'>Existing user ?  <Link to={"/login"} color='white'>Login</Link></p>   
            </form>
       
    </div>
   </section>
   </> 
  )
}

export default Signup