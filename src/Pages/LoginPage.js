import React, { useState } from "react";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confPassword,setConfPassword] = useState("")
  const navigate = useNavigate();

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  // const confPasswordHandler = (event)=>{
  //     event.preventDefault()
  //     setConfPassword(event.target.value)
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    // setConfPassword("");
    setPassword("");
    setEmail("");
    const api = "http://localhost:7070/user/login";
    const response = axios.post(api, userData);
    console.log(userData);
    console.log(response);
    navigate("/home");
  };

  return (
    <div className="body">
      <div className="box">
        <span className="borderline"></span>
        <form>
          <h2>Log in</h2>
          <div className="inputBox">
            <input
              type="text"
              name="user-name"
              required="required"
              onChange={emailHandler}
              value={email}
            />
            <span>Email(as a userName)</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required="required"
              onChange={passwordHandler}
              value={password}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <NavLink to="/forgot">Forgot Password</NavLink>
            <NavLink to="/">Signup</NavLink>
          </div>
          <button type="submit" value="login" onClick={submitHandler}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
