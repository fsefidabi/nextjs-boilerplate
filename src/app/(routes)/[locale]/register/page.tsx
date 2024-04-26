"use client"

import React, { useState } from "react"
import axios from "axios"

function RegisterPage(props) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  async function registerUser(e) {
    e.preventDefault()
    await axios.post("/api/register", data)
  }

  return (
    <>
      <h1>Register Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" required value={data.username} onChange={handleInputChange}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" required value={data.email} onChange={handleInputChange}/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required value={data.password}
                 onChange={handleInputChange}/>
        </div>

        <button type="submit" onClick={registerUser}>Register</button>
      </form>
    </>
  )
}

export default RegisterPage
