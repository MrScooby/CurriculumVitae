import styled from 'styled-components'
import React from 'react'

const HeaderContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin: 0 0 5px 10px;;
`

const Header = styled('p')`
  font-size: 26px;
  text-align: center;
`

export default ({ children }: IChildren) => {
  return (
    <HeaderContainer>
      <Header>
        {children}
      </Header>
    </HeaderContainer>
  )
}