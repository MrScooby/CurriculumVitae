import styled from 'styled-components'

export default styled('div')<{ navbarDown: boolean }>`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;

  transform: translateY(${ props => props.navbarDown ? '-80px' : '0'});
  transition: transform .5s;
`