import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { storeageUtil } from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'

function SignUpForm() {

  const [values, setValues] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeEvent = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
    console.log(values)
  }
  const registerEvent = async () => {
    const result = await api.post("/auth/signup", values)
    let message = {}
    if (result.status === 200) {
      storeageUtil.setItem("user", JSON.stringify(result.data))
      message = { success: 'User Successfully registered ', error: '', category: true }
      dispatch(setMessages(message))
      navigate("/")
    } else {
      const message = { success: '', error: "Error occured: " + result.status, category: false }
      dispatch(setMessages(message))
    }
  }
  return (
    <div>
      <div className="row">
        <hr />
        <div className="col-4">
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center text-primary text-uppercase">Registration Form</h5>
              <hr />
              <div className="form-group mt-3">
                <label htmlFor="fisrtName">First Name</label>
                <input type="input" className="form-control mt-2" id="fisrtName" aria-describedby="firstNameHelp" placeholder="Enter firstname" onChange={(e) => handleChangeEvent("firstName", e.target.value)} />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="middleName">Middle Name</label>
                <input type="input" className="form-control mt-2" id="middleName" aria-describedby="middleNameHelp" placeholder="Enter middlename" onChange={(e) => handleChangeEvent("middleName", e.target.value)} />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="lastName">Last Name</label>
                <input type="input" className="form-control mt-2" id="lastName" aria-describedby="lastNameHelp" placeholder="Enter lastname" onChange={(e) => handleChangeEvent("lastName", e.target.value)} />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Register as</label>
                <select className="form-select mt-3" aria-label="Default select example" onChange={(e) => handleChangeEvent("role", [e.target.value])}>
                  <option defaultValue disabled>Select</option>
                  <option value="seller">Seller</option>
                  <option value="buyer">Buyer</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="input" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => handleChangeEvent("email", e.target.value)} />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="username">Username</label>
                <input type="input" className="form-control mt-2" id="username" aria-describedby="usernameHelp" placeholder="Enter username" onChange={(e) => handleChangeEvent("username", e.target.value)} />
              </div>


              <div className="form-group mt-3">
                <label htmlFor="passwordd">Password</label>
                <input type="password" className="form-control mt-2" id="password" aria-describedby="passwordHelp" placeholder="Enter password" onChange={(e) => handleChangeEvent("password", e.target.value)} />
              </div>


              <div className="form-group mt-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control mt-2" id="confirmPassword" aria-describedby="confirmPasswordHelp" placeholder="Re-enter password" />
              </div>

              <button className="btn btn-primary mt-md-3" onClick={registerEvent}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default SignUpForm
