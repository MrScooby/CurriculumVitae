import styled from 'styled-components'
import React from 'react'

interface IAvatar {
  left: boolean,
  avatarUrl: string
}

const BlockAvatarContainer = styled('div')<{left: boolean}>`
  width: 160px;
  height: 160px;
  background-color: black;
  border: 3px solid ${props => props.theme.colors.concrete};
  border-radius: 50%;

  ${props => props.theme.breakpoints.down('xs')} {
    width: 110px;
    height: 110px;
  }
`

const BlockAvatar = styled('img')`
  width: 100%;
  height: 100%;
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