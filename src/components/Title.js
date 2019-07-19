import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  font-weight: bold;
  font-size: 45px;
  text-transform: uppercase;
`
const Title = props => {
  return <Text>{props.text}</Text>
}

export default Title
