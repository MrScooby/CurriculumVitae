import styled from 'styled-components'
import React from 'react'

import TextHeader from './textHeader'
import TextDates from './textDates'
import TextContent from './textContent'

const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 150px;
  max-width: 500px;
  margin: 30px 0;

  ${props => props.theme.breakpoints.down('md')} {
    display: none;
  }

  &.focused {
    display: flex;
  }
`

export default ({header, dates, content}: IText) => {
  return (
    <TextContainer>
      <TextHeader>
        {header}
      </TextHeader>
      <TextDates>
        {dates.start + ' - ' + dates.end}
      </TextDates>
      <TextContent>
        {content}
      </TextContent>
    </TextContainer>
  )
}