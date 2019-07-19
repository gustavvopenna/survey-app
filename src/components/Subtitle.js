import React from 'react'
import styled from 'styled-components'
import Title from './Title'

const Text = styled.h2`
  font-size: 24px;
  font-weight: 400;
`

const Subtitle = props => {
  return <Text>{props.text}</Text>
}

export default Subtitle
