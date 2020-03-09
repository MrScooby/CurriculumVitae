import styled from 'styled-components'

export default styled('div')<{left: boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};
  /* ${props => props.theme.breakpoints.down('md')} {
    justify-content: center;
  } */
  flex: 1;
`