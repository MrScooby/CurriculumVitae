import styled from 'styled-components'
import React from 'react'

const ContentContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin: 10px 0 5px 10px;;
`

const Content = styled('p')`
  font-size: 20px;
  text-align: justify;
  line-height: 22pt;
`

export default ({ children }: IChildren) => {
  return (
    <ContentContainer>
      <Content>
        {children}
      </Content>
    </ContentContainer>
  )
}