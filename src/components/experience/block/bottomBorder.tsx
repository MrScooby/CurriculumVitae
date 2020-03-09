import styled from 'styled-components'

export default styled('div')`
  /* width: 100%; */
  height: 3px;
  background-color: ${props => props.theme.colors.concrete};
  margin: 0 82px;
  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }
`