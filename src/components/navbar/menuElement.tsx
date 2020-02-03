import styled from 'styled-components'
import React from 'react'

interface IProps extends IChildren {
  reference: string
}

const MenuElementContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 15px;
`

const MenuElement = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 130px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.colors.mineShaft};
  }
`

export default ({ children, reference }: IProps) => {
  return (
    <MenuElementContainer>
      <a href={reference}>
        <MenuElement>
          {children}
        </MenuElement>
      </a>
    </MenuElementContainer>
  )
}