import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./firebase";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    // ?login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    // ?login logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="text"
          />
          <button onClick={login} className="login__signinButton">
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Amazon condition of Use and Sale.Please see
          our privacy
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}
