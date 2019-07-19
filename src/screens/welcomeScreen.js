import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import ServiceContext from '../context/serviceContext'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Button from '../components/StyledButton'
import { red } from 'ansi-colors'

const endpoint =
  'https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization'

const scope = {
  splitterStyle: {
    height: 100
  }
}

class WelcomeScreen extends Component {
  state = {
    info: {},
    title: '',
    subtitle: '',
    start: ''
  }

  componentDidMount() {
    axios
      .post(endpoint)
      .then(response => {
        this.setState({
          title: response.data.text.welcomeTitle,
          subtitle: response.data.text.welcomeSubtitle,
          start: response.data.text.start
        })
        console.log(this.state.subtitle)
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.info) return <h1>Loading ...</h1>
    return (
      <div
        style={{
          width: '100%',
          height: `${scope.splitterStyle}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Title text={this.state.title} />
        <Subtitle text={this.state.subtitle} />
        <Link to="/question" style={{ width: '100%' }}>
          <Button text={this.state.start} />
        </Link>
      </div>
    )
  }
}

export default WelcomeScreen
