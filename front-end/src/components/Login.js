import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${window.location.origin}/logindone`, { email, password });
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <fieldset id="login">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="input"
            value={email}
            onChange={(evt) => {
              setemail(evt.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            value={password}
            onChange={(evt) => {
              setpassword(evt.target.value);
            }}
          />
          <input type="submit" className="input" />
          <Link className="input one" to="/register" id="link">
            Sign Up
          </Link>
        </fieldset>
      </form>
    </>
  );
}
