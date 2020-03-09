import styled from 'styled-components'
import React, { useState } from 'react'

import HamburgerContainer from './hamburgerContainer'
import HamburgerSVG from './hamburgerSVG'
import MenuElement from './menuElement'
import CloseNavbarButton from './closeNavbarButton'

const NavbarContainer = styled('div') <{ navbarDown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.tuna};
  color: ${props => props.theme.colors.white};
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1;
  
  transform: translateY(${ props => props.navbarDown ? '0' : '-265px'});
  transition: transform .5s;

  ${props => props.theme.breakpoints.down('sm')} {
    transform: translateY(${ props => props.navbarDown ? '0' : '-265px'});
    height: 250px;
    flex-direction: column;
    padding-bottom: 15px;    
  }
`

const Navbar = () => {
  const [navbarDown, setNavbarDown] = useState(false)

  const onClickHamburger = () => {
    setNavbarDown(true)
  }

  const onClickHidenavbarButton = () => {
    setNavbarDown(false)
  }

  return (
    <>
      <HamburgerContainer
        navbarDown={navbarDown}
        onClick={onClickHamburger}
      >
        <HamburgerSVG
          style={{ fontSize: 50 }}
        />
      </HamburgerContainer>
      <NavbarContainer
        navbarDown={navbarDown}
      >
        <MenuElement
          reference='#'
        >
          ABOUT ME
        </MenuElement>
        <MenuElement
          reference='#'
        >
          EXPERIENCE
        </MenuElement>
        <MenuElement
          reference='#'
        >
          PORTFOLIO
        </MenuElement>
        <MenuElement
          reference='#'
        >
          CONTACT
        </MenuElement>
        <CloseNavbarButton
          navbarDown={navbarDown}
          onClick={onClickHidenavbarButton}
        />
      </NavbarContainer>
    </>
  )
}

export default Navbar