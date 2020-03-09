import styled from 'styled-components'

export default styled('div')<{ first?: boolean, last?: boolean }>`
  display: flex;
  width: 3px;
  background-color: ${props => props.theme.colors.concrete};
  ${props => props.first && `
    margin-top: 20%;
    ${props.theme.breakpoints.down('sm')} {
      margin-top: 40%;
    }`}
  ${props => props.last && `
    margin-bottom: 20%;
    ${props.theme.breakpoints.down('sm')} {
      margin-top: 40%;
    }`}
`