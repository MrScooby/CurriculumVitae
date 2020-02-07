import styled from 'styled-components'

export default styled('div')<{left: boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};
  width: 100%;
  height: 100%;
  align-items: stretch;
  flex: 1;
`