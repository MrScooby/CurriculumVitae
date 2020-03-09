import styled from 'styled-components'
import React from 'react'

import InfoContainer from './infoContainer'
import ProfilPicture from './profilPicture'
import TextContainer from './textContainer'
import NameContainer from './nameContainer'
import RoleContainer from './roleContainer'

interface IIntro {
  name: string,
  role: string,
  pictureUrl: string
}

const IntroContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.concrete};
  color: ${props => props.theme.colors.tuna};
  height: 400px;
  width: 100%;
`

export default ({name, role, pictureUrl}: IIntro) => {
  return (
    <IntroContainer>
      <InfoContainer>
        <ProfilPicture 
          imgSrc={pictureUrl}
        />
        <TextContainer>
          <NameContainer>
            {name}
          </NameContainer>
          <RoleContainer>
            {role}
          </RoleContainer>
        </TextContainer>
      </InfoContainer>
    </IntroContainer>
  )
}