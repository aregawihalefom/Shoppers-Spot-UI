import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/API'
import { storeageUtil } from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'
import { storeUserDetails } from '../../store/Redux/userReducer'
import {useSelector, useDispatch} from 'react-redux'
import { APP_CONFIG } from "../../services/Constants";


function SignInForm() {

  const statusMessage = useSelector(state => state.message)
  const [values, setValues] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeEvent = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  }


  const loginEvent = () => {
    api.deleteAuth()
    api.post("/auth/signin", values)
      .then((result) => {
        storeUser(result.data.data.user)
        dispatch(setMessages({ message: 'Successfully logged in ', type: true }))
        navigate("/")
      })
    .catch(error=>{
      const message ={message : error.response.data.message, type: false}
      dispatch(setMessages(message))
    })

  }
  const storeUser = (user) => {
    storeageUtil.setItem(APP_CONFIG.data.USER_NAME, user.username)
    storeageUtil.setItem(APP_CONFIG.data.TOKEN_NAME, user.token)
    storeageUtil.setItem(APP_CONFIG.data.ROLE, user.roles[0])
    storeageUtil.setItem(APP_CONFIG.data.ID, user.id)

    dispatch(storeUserDetails(user))

  }

  return (
    <div>
      <div className="row">
        <hr />
        <div className="col-4">
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center text-primary text-uppercase">Login</h5>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="input" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => handleChangeEvent("username", e.target.value)} />
              </div>
              <p>{""}</p>
              <div className="form-group mt-lg-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handleChangeEvent("password", e.target.value)} />
              </div>
              <button className="btn btn-primary mt-md-3" onClick={loginEvent}>Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default SignInForm
