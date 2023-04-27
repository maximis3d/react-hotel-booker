import React from "react";
import { useState } from "react";
import "./signup.css"

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="signup-container">
      <form action="" className="signup" onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};
