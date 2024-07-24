import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:5000/users")
    .then((response) => {
      const users = response.data;
      const maxId = users.length > 0 ? Math.max(...users.map((user) => user.id)) : 0;
      const newUser = {
        id: maxId + 1,
        firstName,
        lastName,
        email,
      };

      axios.post("http://localhost:5000/users", newUser)
      .then(() => {
        nav("/");
      });

    });
  };
  return (
    <div>
      <div className="container mt-5">
        <h1 className="mb-4">Add Users</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{ width: "600px", marginLeft: "330px" }}
              id="firstname"
              value={firstName}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              placeholder="Enter the Name"
            />
            <label htmlFor="name" style={{ marginLeft: "330px" }}>
              User FirstName
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{ width: "600px", marginLeft: "330px" }}
              id="name"
              value={lastName}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              placeholder="Enter the Email"
            />
            <label htmlFor="email" style={{ marginLeft: "330px" }}>
              User LastName
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              style={{ width: "600px", marginLeft: "330px" }}
              id="contact"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter the contact"
            />
            <label htmlFor="name" style={{ marginLeft: "330px" }}>
              Email
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-3"
            style={{ width: "200px" }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
