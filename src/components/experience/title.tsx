import styled from 'styled-components'
import React from 'react'

const TitleContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  max-width: 450px;
`

const Title = styled('p')`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
`

export default ({ children }: IChildren) => {
  return (
    <TitleContainer>
      <Title>
        {children}
      </Title>
    </TitleContainer>
  )
}