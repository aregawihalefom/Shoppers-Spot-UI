import React,{useState} from 'react'
import { useDispatch } from "react-redux";

import { useNavigate} from 'react-router-dom'
import {api} from '../../services/API'
import { APP_CONFIG, paymentMethods } from '../../services/Constants'
import {storeageUtil} from '../../store/localStorage/local'
import { setMessages } from '../../store/Redux/MessageReducers'

function SignInForm() {

  const [values, setValues] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeEvent = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  }
  const  loginEvent = async () => {
    const result = await api.post("/auth/signin", values)
    let message ={}

    if(result.status === 200){
       storeageUtil.setItem("user", JSON.stringify(result.data))
        message ={success:'Successfully logged in ',  error: '', category:true}
       dispatch(setMessages(message))
       navigate("/")
    }else{
      const message ={success:'',  error: "Error occured: " + result.status, category:false}
      dispatch(setMessages(message))
     
    }

  }

  return (
    <div>
      <div className="row">
        <hr/>
        <div className="col-4">
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center text-primary text-uppercase">Login</h5>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input type="input" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>handleChangeEvent("username", e.target.value)}/>
                </div>
                <p>{""}</p>
                <div className="form-group mt-lg-3">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Password"  onChange={(e)=>handleChangeEvent("password", e.target.value)}/>
                </div>
                <button className="btn btn-primary mt-md-3" onClick = {loginEvent}>Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default SignInForm
