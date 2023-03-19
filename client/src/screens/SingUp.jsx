import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const SingUp = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        location: details.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Details");
    }
    if (json.success) {
      navigate("/");
    }
  };
  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <div className="container m-5 mx-auto w-50 shadow-lg p-3 mb-5 bg-body rounded">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={details.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email / Username
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={details.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={details.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={details.location}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign-Up
          </button>
          <Link to="/login" className="btn btn-success mx-3">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default SingUp;
