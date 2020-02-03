import styled from 'styled-components'
import React from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from '../src/components/navbar/navbar'

const Wrapper = styled('div')`
  width: 100%;
  height: 2000px;
  background-color: ${props => props.theme.colors.concrete};
`

storiesOf('Navbar', module)
  .add('Full', () => {
    return (
      <Wrapper>
        <Navbar />
      </Wrapper>
    )
  })