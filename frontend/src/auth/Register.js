import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";
import { toast } from 'react-toastify';

const Register = ({history}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try { 
      const res = await register({
      firstName,
      lastName,
      email,
      password
    });

      console.log("Registered User ===> " + res);
      toast.success("Register success! Please login");
      history.push("/login")
    } catch (err) {
      console.log(err)
      if(err.response.status === 400) toast.error(err.response.data)
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="form-box register-form">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-plus" style={{fontSize:"110px"}}></i></h4>
              <div className="image"></div>
          </div>

          <div className="body-form">
            <form onSubmit={handleSubmit}>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-arrow-circle-right"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-arrow-circle-right"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input type="email" className="form-control" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

                <button className="btn btn-secondary btn-block form-button">REGISTER</button>

              <div className="message">
                  <div>
                    <Link to={"/login"}className="message-password">Already have account?</Link>
                  </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Register;
