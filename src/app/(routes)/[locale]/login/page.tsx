"use client"

import React, { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"

function LoginPage(props) {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(status)
  }, [session, status])

  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  async function loginUser(e) {
    e.preventDefault()
    await signIn("credentials", {
      ...data,
      redirect: false
    })
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
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required value={data.password}
                 onChange={handleInputChange}/>
        </div>

        <button type="submit" onClick={loginUser}>Login</button>
      </form>
    </>
  )
}

export default LoginPage
