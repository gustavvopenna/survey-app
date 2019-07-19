import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ServiceContext from '../context/serviceContext'

const endpoint =
  'https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization'

class WelcomeScreen extends Component {
  state = {
    info: {}
  }

  componentWillMount() {
    axios
      .post(endpoint)
      .then(response => {
        this.setState({ info: response.data })
        console.log(this.state.info.text.welcomeTitle, 'El estado weewewe')
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log('render')
    if (!this.state.info) return <h1>Loading ...</h1>
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/question">
          <button>Start</button>
        </Link>
      </div>
    )
  }
}

export default WelcomeScreen
