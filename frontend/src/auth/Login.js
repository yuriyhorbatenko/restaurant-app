import React from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import { login } from "../actions/auth.js";
import "../styling/UserAuth.css";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try { 
      let res = await login({
      email,
      password
    });
    
      
      if(res.data) {
        console.log("Save user Response in Redux and Local Storage then redirect ===> ");
        window.localStorage.setItem("auth", JSON.stringify(res.data));

        dispatch ({
          type: "LOGGED_IN_USER",
          payload: res.data
        });
        history.push("/dashboard");
      }

    } catch (err) {
      console.log(err)
      if(err.response.status === 400) toast.error(err.response.data)
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
              <div className="image"></div>
          </div>

          <div className="body-form">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input type="email" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

                <button className="btn btn-secondary btn-block form-button">LOGIN</button>

              <div className="message">
                  <div><a href="#"  className="message-password">Forgot your password?</a></div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
  