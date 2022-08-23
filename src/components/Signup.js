import React, { useEffect, useState } from "react";
import Validation from "./Validation";

function Signup({submitForm}) {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
    }

    const [values, setValues] = useState({
        fullname:"",
        email: "",
        password : "",
    })

    const[errors, setErrors] = useState({})

    const[dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        // console.log(values)
        
    }

    useEffect(()=>{
        if(dataIsCorrect && Object.keys(errors).length=== 0){
           submitForm(true)
        }
    },[errors])
  return (
    <div className="container">
      <div className="app-wraper">
        <div>
          <h2 className="title"> Create Account</h2>
        </div>
        <form className="form-wraper">
          <div className="name">
            <label className="label">Enter Full Name</label>
            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          
          <div className="email">
            <label className="label">Email ID</label>
            <input className="input" type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          
          <div className="password">
            <label className="label">Password</label>
            <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          
          <div>
            <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
