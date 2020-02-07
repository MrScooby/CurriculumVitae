import styled from 'styled-components'
import React from 'react'

import Title from './title'
import Block from './block/block'

const ExperienceContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.dustyGray};
  color: ${props => props.theme.colors.concrete};
  min-height: 400px;
  width: 100%;
  padding-bottom: 30px;
`

export default () => {
  return (
    <ExperienceContainer>
      <Title>
        EXPERIENCE
      </Title>
      <Block
        order={1}
        avatarUrl={'/public/img/teacode.jpeg'}
        header={'Spook AB'}
        dates={{
          start: '01.01.2020',
          end: '12.12.2020'
        }}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '}
      />
      <Block
        order={2}
        avatarUrl={'/public/img/spook.png'}
        header={'Spook AB'}
        dates={{
          start: '01.01.2020',
          end: '12.12.2020'
        }}
        content={'Lorem ipsum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, Lorem ipspsum dolor sit amet, consectetur adipiscing elit, Lorem ipspsum dolor sit amet, consectetur adipiscing elit, Lorem ipspsum dolor sit amet, consectetur adipiscing elit, Lorem ipspsum dolor sit amet, consectetur adipiscing elit, Lorem ipsconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '}
      />
      <Block
        order={3}
        avatarUrl={'/public/img/spook.png'}
        header={'Spook AB'}
        dates={{
          start: '01.01.2020',
          end: '12.12.2020'
        }}
        content={'Lorem ipsum dolore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '}
      />
      <Block
        order={4}
        avatarUrl={'/public/img/spook.png'}
        last
        header={'Spook AB'}
        dates={{
          start: '01.01.2020',
          end: '12.12.2020'
        }}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '}
      />
    </ExperienceContainer>
  )
}