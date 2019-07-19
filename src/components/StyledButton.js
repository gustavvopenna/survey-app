import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(
    52deg,
    rgba(8, 29, 98, 1) 0%,
    rgba(9, 167, 202, 1) 100%
  );
  width: 100%;
  border: none;
  justify-self: flex-end;
  margin-top: 30%;
`

const Text = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: 7px;
`

const StyledButton = props => {
  return (
    <Button>
      <Text>{props.text}</Text>
    </Button>
  )
}

export default StyledButton
