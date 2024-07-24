import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewUser() {
    const {id} = useParams();
    const [users, setUsers] = useState([])
    const nav = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then((respones)=>{
            setUsers(respones.data)
        })
    }, [id])

    const handleSubmit = (e)=>{
        e.preventDefault();
        nav('/');
    }

  return (
    <div>
       <div className="container mt-5">
        <h1 className="mb-4">View Users</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              style={{width:"600px", marginLeft:"330px"}}
              id="firstname"
              value={users.firstName}
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
              value={users.lastName}
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
              value={users.email}
              placeholder="Enter the contact"
            />
            <label htmlFor="name" style={{marginLeft:"330px"}}>Email</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3" style={{width:"200px"}}>
            Back
          </button>
        </form>
      </div>
    </div>
  )
}

export default ViewUser
