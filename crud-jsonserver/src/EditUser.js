import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const {id} = useParams();
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const nav = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then((response)=>{
            setFirstname(response.data.firstName);
            setLastname(response.data.lastName);
            setEmail(response.data.email);
        });
    }, [id]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/users/${id}`, {firstName, lastName, email})
        .then(()=>{
            nav('/');
        })
    }
  return (
    <div>
      
      <div className="container mt-5">
        <h1 className="mb-4">Add Users</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="firstname"
              value={firstName}
             onChange={(e)=>{setFirstname(e.target.value)}}
              placeholder="Enter the Name"
            />
            <label htmlFor="name" style={{marginLeft:"330px"}}>User FirstName</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="name"
              value={lastName}
              onChange={(e)=>{setLastname(e.target.value)}}
              placeholder="Enter the Email"
            />
            <label htmlFor="email" style={{marginLeft:"330px"}}>User LastName</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="contact"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter the contact"
            />
            <label htmlFor="name" style={{marginLeft:"330px"}}>Email</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3" style={{width:"200px"}}>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditUser
