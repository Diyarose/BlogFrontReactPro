import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogSign = () => {
    const [data,setData]=useState(
        {
            
                "name":"",
                "email":"",
                "pass":""
            
        }
    )
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    
    console.log(data)
    axios.post("http://localhost:8080/signup",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("succesfully added")
                }
                else{
                    alert("error")
                }
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    )
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='pass' value={data.pass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SignIn</button>
                        </div>
                        <div>
                        <Link class="nav-link" to="/">Back to login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSign