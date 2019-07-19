import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
`

const Emoji = styled.p`
  font-size: 3rem;
`

class Reactions extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Emoji>😭</Emoji>
        </Wrapper>
        <Wrapper>
          <Emoji>😐</Emoji>
        </Wrapper>
        <Wrapper>
          <Emoji>😄</Emoji>
        </Wrapper>
        <Wrapper>
          <Emoji>😍</Emoji>
        </Wrapper>
      </Container>
    )
  }
}

export default Reactions
