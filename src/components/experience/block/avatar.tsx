import styled from 'styled-components'
import React from 'react'

interface IAvatar {
  left: boolean,
  avatarUrl: string
}

const BlockAvatarContainer = styled('div')<{left: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  background-color: black;
  border: 3px solid ${props => props.theme.colors.concrete};
  border-radius: 50%;
  margin: auto 0;

  ${props => props.left ? `
    transform: translateX(-84px);
    margin-right: -50px;
  ` : `
    transform: translateX(85px);
    margin-left: -50px;
  `}
`

const BlockAvatar = styled('img')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  object-fit: cover;
`

export default ({ left, avatarUrl }: IAvatar) => {
  return (
    <BlockAvatarContainer
      left={left}
    >
      <BlockAvatar
        src={avatarUrl}
        alt={'image'}
      />
    </BlockAvatarContainer>
  )
}