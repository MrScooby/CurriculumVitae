import styled from 'styled-components'
import React from 'react'

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled('p')`
  font-size: 20px;
  letter-spacing: 2px;
  text-align: center;
`

export default ({ children }: IChildren) => {
  return (
    <Container>
      <Text>
        {children}
      </Text>
    </Container>
  )
}