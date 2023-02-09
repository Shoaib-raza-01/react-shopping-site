import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/LoginPage.css'

function LoginPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className='login'>
      <div className="form-container">
        <label for="exampleInputEmail1" className="label">Email address</label> <br /><br />
        <input type="email" className="control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text text">We'll never share your email with anyone else.</div>

        <label for="exampleInputPassword1" className="label">Password</label> <br /><br />
        <input type="password" className="control" id="exampleInputPassword1" /> <br />

        <input type="checkbox" className="form-check-input input" id="exampleCheck1" />
        <label className="form-check-label checkBox" for="exampleCheck1">Check me out</label> <br />

        <button type="submit" className="btn butn btn-outline-primary" onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default LoginPage
