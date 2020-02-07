import styled from 'styled-components'

export default styled('div')`
  display: flex;
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.colors.concrete};
`