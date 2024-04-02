import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/Signup',{email,password})
    .then(result=>console.log(result))
    .catch(err=> console.error(err));
  }
  return (
    <section>
      {" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
      <span></span> <span></span> <span></span> <span></span> <span></span>
      <div class="signup">
        <div class="content">
          <h2>Sign Up</h2>

          <form class="form" onSubmit={handleSubmit}>
            <div class="inputBox">
              <input
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <i>Email</i>
            </div>

            <div class="inputBox">
              <input
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkStrongPassword(e.target.value);
                }}
              />
              <i>Password</i>
            </div>

            <div class="links">
              {" "}
              <a href="#">Forgot Password</a> <Link to="/Login">Login</Link>
            </div>

            <div class="inputBox">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Signup;
