import styled from 'styled-components'

export default styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.concrete};
  width: 100%;
`