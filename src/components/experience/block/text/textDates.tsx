import styled from 'styled-components'
import React from 'react'

const DatesContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin: 0 0 10px 10px;
`

const Dates = styled('p')`
  font-size: 14px;
  text-align: center;
`

export default ({ children }: IChildren) => {
  return (
    <DatesContainer>
      <Dates>
        {children}
      </Dates>
    </DatesContainer>
  )
}