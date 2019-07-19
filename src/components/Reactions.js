import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Emoji = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
`

class Reactions extends Component {
  render() {
    return (
      <Container>
        <Emoji>😭</Emoji>
        <Emoji>😐</Emoji>
        <Emoji>😄</Emoji>
        <Emoji>😍</Emoji>
      </Container>
    )
  }
}

export default Reactions
