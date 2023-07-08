import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      number: number,
      email: email,
      password: password,
    };
    setName("");
    setNumber("");
    setEmail("");
    setPassword("");

    const api = "https://node-handson-4-for-login.onrender.com/user/register";
    const response = axios.post(api, userData);
    response
      .then((res) => {
        // setData(res.data);

        navigate("/home");
        setResponseData(res.data);
        console.log(res.data);
        localStorage.setItem("token", responseData.token);
        alert("user log in successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(data);
  };
  useEffect(() => {
    // console.log(responseData);
    localStorage.setItem("token", responseData.token);
  }, [responseData]);

  return (
    <div className="body">
      <div className="box">
        <span className="borderline"></span>
        <form>
          <h2>Register</h2>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              required="required"
              value={name}
              onChange={handleName}
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="number"
              required="required"
              value={number}
              onChange={handleNumber}
            />
            <span>Mobile</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required="required"
              value={email}
              onChange={handleEmail}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required="required"
              value={password}
              onChange={handlePassword}
            />
            <span>Password</span>
            <i></i>
          </div>
          <button type="submit" value="submit" onClick={handleSubmit}>
            Register
          </button>
          <NavLink to="/login">Alreday Registered go to log in</NavLink>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
