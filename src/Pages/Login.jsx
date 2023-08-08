import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Asset/company logo.jpeg";

export default function Login() {
  const [email, setEmail] = useState("info@tezzasolutions.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      navigate("/account/workspace");
    } else {
      alert("Please fill in email and password");
    }
  };
  return (
    <div className="container-login">
      <div className="form-box shadow">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-2 fw-bold">Login</h6>
            <p>Login to your account</p>
          </div>
          <img src={logo} alt="logo" className="profile-pic" />
        </div>

        <form onSubmit={handleSubmit} className="mt-5">
          <div className="d-flex flex-column mb-4">
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              type="text"
              value={email}
              autoFocus
              className="w-100 mt-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              className="w-100 mt-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-75 mx-auto">
            <button
              type="submit"
              className="btn text-center w-100 rounded-0 p-2"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
