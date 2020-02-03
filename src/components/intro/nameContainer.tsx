import styled from 'styled-components'
import React from 'react'

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const Text = styled('p')`
  font-size: 40px;
  letter-spacing: 3px;
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