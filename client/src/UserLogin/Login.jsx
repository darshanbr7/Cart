import React from 'react'
import {Link} from "react-router-dom"
const Tlogin = () => {
  return (
    <div>
         <div>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-4"></div>                
                <div className="col-md-4 mt-3">              
                    <div className="card mt-4">
                        <div className="card-body">
                            <form >
                              <div className="form-group">
                               <label>Email :</label>
                               <input type="text"  className='form-control' />
                              </div>
                              <div className="form-group">
                               <label>Password :</label>
                               <input type="text"  className='form-control' />
                              </div>
                              <center>
                                <button className='btn btn-success my-3'>Login</button>
                              </center>
                              <p>new  user ?  Signup <Link to={"/Msignup"}>here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tlogin
