import React from 'react'
import Subtitle from '../components/Subtitle'
import Button from '../components/StyledButton'
import Reactions from '../components/Reactions'

const scope = {
  splitterStyle: {
    height: 100
  }
}

class QuestionScreen extends React.Component {
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
        <Subtitle text="Pregunta 1" />
        <Reactions />
        <Button text="Next" />
      </div>
    )
  }
}

export default QuestionScreen
