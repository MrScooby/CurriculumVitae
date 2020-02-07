import styled from 'styled-components'

export default styled('div')<{first?: boolean, last?: boolean}>`
  display: flex;
  width: 3px;
  background-color: ${props => props.theme.colors.concrete};
  margin-top: ${props => props.first ? `20%` : 0};
  margin-bottom: ${props => props.last ? `20%` : 0};
`