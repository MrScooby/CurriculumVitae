import styled from 'styled-components'
import React from 'react'

import HighlightOffIcon from '@material-ui/icons/HighlightOff'

interface ICloseButton {
  navbarDown: boolean,
  onClick: () => void
}

const CloseButtonContainer = styled('div') <{ navbarDown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 60px;
  height: 50px;

${props => props.theme.breakpoints.up('md')} {
  height: 60px;
  margin-right: 10px;
  position: fixed;
  top: 10px;
  right: 0;

  transform: translateY(${ props => props.navbarDown ? '0' : '-80px'});
  transition: transform .5s;
}
`

const CloseButton = styled(HighlightOffIcon)`
  color: ${props => props.theme.colors.white};
  display: flex;
  float: right;
`

export default ({ navbarDown, onClick }: ICloseButton) => {
  return (
    <CloseButtonContainer
      navbarDown={navbarDown}
      onClick={onClick}
    >
      <CloseButton
        style={{ fontSize: 50 }}
      />
    </CloseButtonContainer>
  )
}