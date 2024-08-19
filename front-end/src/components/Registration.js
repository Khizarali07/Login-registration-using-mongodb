import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  const [name, setname] = useState("");
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${window.location.origin}/registerdone`, {
      name,
      user,
      email,
      password,
    });
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <fieldset id="login">
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            value={name}
            onChange={(evt) => {
              setname(evt.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter your User-name"
            className="input"
            value={user}
            onChange={(evt) => {
              setuser(evt.target.value);
            }}
          />
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
          <Link className="input one" to="/" id="link">
            Login
          </Link>
        </fieldset>
      </form>
    </>
  );
}
