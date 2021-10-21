import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const { logInUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    logInUser(userData);
  };
  return (
    <div>
      <h1>You are not logged in</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
            placeholder="Enter your password..."
          />
        </div>
        <button className="btn">Log In</button>
      </form>
    </div>
  );
};
