import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
       <h1 className='m-5'>User Module</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default User
