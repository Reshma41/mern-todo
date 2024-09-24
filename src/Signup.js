import { useState } from "react"
import React from 'react'
import { Link,useNavigate } from "react-router-dom"
import {Button,Form} from 'react-bootstrap';

function Signup() {
    const navigate=useNavigate()
    const[data,setdata]=useState({
        name:"",
        email:"",
        ph_no:"",
        image:""

   })
   const changefn=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }
   const sub=(a)=>{
    a.preventDefault()
    console.log("data",data)
    navigate('/Login')
   }
  return (
    <div>
         
        <h2>Signup</h2>
        <form onSubmit={sub}>
        
            <div>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupname">
            <input type="text"label="name"placeholder='name'onChange={changefn}required/>
            </Form.Group>
            </Form>
            </div>
            <br/>
            <div>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <input type="email"label="email"placeholder="email"onChange={changefn}required/>
                </Form.Group>
                </Form>
            </div>
            <br/>
            <div>
                <Form>
            <Form.Group className="mb-3" controlId="formGroupPhonenumber">
                <input type="number"label="Phone number"placeholder="Phone number"onChange={changefn}required/>
                </Form.Group>
                </Form>
            </div>
            <br/>
            <div>
                <Form>
            <Form.Group className="mb-3" controlId="formGroupImage">
                <input type="file"label="Image"accept="image/*"onChange={changefn}required/>
                </Form.Group>
                </Form>
            </div>
            <br/>
            <Button variant="success">ADD<Link to='/Login'></Link></Button>
            
        </form>
        
        
      
    </div>
  )
}

export default Signup
