import React from 'react'
import axios from 'axios'
import Subtitle from '../components/Subtitle'
import Button from '../components/StyledButton'
import Reactions from '../components/Reactions'

const scope = {
  splitterStyle: {
    height: 100
  }
}

const endpoint =
  'https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization'

class QuestionScreen extends React.Component {
  state = {
    questions: [],
    currentQuestion: '',
    questionNumber: 0
  }

  componentDidMount() {
    axios
      .post(endpoint)
      .then(res => {
        this.setState({
          currentQuestion: res.data.questions[this.state.questionNumber],
          questions: res.data.questions
        })
        console.log(this.state.questions)
      })
      .catch(err => console.log(err))
  }

  handleQuestion = e => {
    if (this.state.questionNumber === this.state.questions.length) {
      this.props.history.push('/thanks')
    }

    this.setState((prevState, props) => ({
      questionNumber: prevState.questionNumber + 1
    }))

    const number = this.state.questionNumber

    this.setState((prevState, props) => ({
      currentQuestion: prevState.questions[number]
    }))
  }

  render() {
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
        <Subtitle text={this.state.currentQuestion.text} />
        <Reactions />
        <div onClick={this.handleQuestion} style={{ width: '100%' }}>
          <Button text="Next" />
        </div>
      </div>
    )
  }
}

export default QuestionScreen
