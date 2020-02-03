import styled from 'styled-components'
import React from 'react'

interface IProps {
  imgSrc: string
}

const PhotoContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  margin: 1px 10px;
  border-radius: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: ${props => props.theme.colors.tuna};
`

const Img = styled('img')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border-radius: 100%;
`

export default ({ imgSrc }: IProps) => {
  return (
    <PhotoContainer>
      <Img
        src={imgSrc}
      />
    </PhotoContainer>
  )
}