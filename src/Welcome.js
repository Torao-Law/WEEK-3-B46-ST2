import React from 'react'

export default function Welcome({logout}) {
  return (
    <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
        <div>
            <p>Welcome</p>
            <button onClick={logout}>Log Out</button>
        </div>
    </div>
  )
}
