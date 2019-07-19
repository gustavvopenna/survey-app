import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServiceContext from '../context/serviceContext'

const WelcomeScreen = props => {
  const serviceContext = useContext(ServiceContext)

  useEffect(() => {
    serviceContext.getData()
  }, [])

  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/question">
        <button>Start</button>
      </Link>
    </div>
  )
}

export default WelcomeScreen
