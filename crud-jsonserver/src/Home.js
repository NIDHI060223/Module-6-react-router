import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [users, setUsers] =  useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(respones => {
            setUsers(respones.data)  
        });
    });

    const deleteUser = (id) => {
       axios.delete(`http://localhost:5000/users/${id}`)
       .then(()=>{
        setUsers(users.filter((user)=>user.id !== id));
       })
    }
  return (
    <div>
      <div className="container">
      <h1 className='m-5'>Json-Server Crud</h1>
      <Link to="/add" className="btn btn-primary mb-4" style={{marginRight:"1000px", width:"250px"}}>Add User</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Firstname</th>
            <th>User Lastname</th>
            <th>user Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-info" style={{width:"80px"}} to= {`/view/${user.id}`}>View</Link>
                <Link className="btn btn-success mx-3" style={{width:"80px"}} to={`/edit/${user.id}`}>Edit</Link>
                <button className="btn btn-danger " onClick={()=>{deleteUser(user.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home
