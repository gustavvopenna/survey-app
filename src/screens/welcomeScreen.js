import React from 'react'
import { Link } from 'react-router-dom'

const welcomeScreen = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/question">
        <button>Start</button>
      </Link>
    </div>
  )
}

export default welcomeScreen
