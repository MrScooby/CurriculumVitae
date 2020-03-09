import styled from 'styled-components'
import React, { useState, useEffect } from 'react'

import BottomBorder from './bottomBorder'
import ContentContainer from './contentContainer'
// import SideBorder from './sideBorder'
import Avatar from './avatar'
import Text from './text'

interface IBlock extends IText {
  order: number,
  last?: boolean,
  avatarUrl: string
}

const BlockContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 400px;
  width: 1000px;
  &.focused {
    /* min-width: 100%; */
  }
  
  ${props => props.theme.breakpoints.down('md')} {
    max-width: 1000px;
    min-height: 600px;
    width: none;
  }
`

const PathElement = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  align-items: center;

  ${props => props.theme.breakpoints.down('md')} {
    min-height: 600px;
  }
`

const SideBorder = styled('div')<{ visible: boolean }>`
  display: 'flex';
  flex: 1;
  width: 3px;
  background-color: ${props => props.visible ? props.theme.colors.concrete : props.theme.colors.dustyGray};
`

export default (props: IBlock) => {
  let left = props.order % 2 === 1
  let first: boolean = props.order === 1
  const elementRef = React.useRef<HTMLDivElement>(null)
  let blockDOMelement: HTMLDivElement
  let textDOMelement: Element

  const onIntersection = (entries: any) => {
    blockDOMelement.classList.toggle('focused')
    textDOMelement.classList.toggle('focused')
  }
  const observer = new IntersectionObserver(onIntersection, { threshold: [1] })

  useEffect(function () {
    if (elementRef?.current === null) return
    blockDOMelement = elementRef.current
    textDOMelement = elementRef.current.children[0].children[left ? 1 : 0]

    if (blockDOMelement.offsetTop + blockDOMelement.offsetHeight > window.innerHeight) blockDOMelement.classList.toggle('focused')
    textDOMelement.classList.toggle('focused')
    observer.observe(elementRef.current)
  }, [])

  return (
    <BlockContainer
      ref={elementRef}
    >
      <ContentContainer
        left={left}
      >
        {!left &&
          <Text
            header={props.header}
            dates={props.dates}
            content={props.content}
          />}
        <PathElement>
          <SideBorder
            visible={!first}
          />
          <Avatar
            left={left}
            avatarUrl={props.avatarUrl}
          />
          <SideBorder
            visible={!props.last}
          />
        </PathElement>
        {left &&
          <Text
            header={props.header}
            dates={props.dates}
            content={props.content}
          />}
      </ContentContainer>
      {/* {!props.last && <BottomBorder />} */}
    </BlockContainer>
  )
}
