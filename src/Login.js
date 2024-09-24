import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate()
    const[data,setdata]=useState
    ({
        name:"",
        password:""
    })
    const changefn=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const sub=(a)=>{
        a.preventDefault()
        console.log("data",data)
        navigate('/Signup')
    }
  return (
    <div>
      
    <h2>Login</h2>
    
    <form onSubmit={sub}>
    <div>
    <input type="text" placeholder="Name"label="Name"onChange={changefn}required/>
    </div>
    <br/>
    <div>
    <input type="text" placeholder="Password"label="Password"onChange={changefn}required/>
    </div>
    <br/>
    <button type="submit">Login</button>
    <br/>
    <p>Don't you have an account?<Link to='/Signup'>Reg</Link></p>
    </form>
    
    </div>

  )
}

export default Login
