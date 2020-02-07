import styled from 'styled-components'
import React from 'react'

import BottomBorder from './bottomBorder'
import ContentContainer from './contentContainer'
import SideBorder from './sideBorder'
import Avatar from './avatar'
import Text from './text/text'

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
  margin: 0 100px;

  ${props => props.theme.breakpoints.down('md')} {
    width: calc(100% - 200px);
  }
`

export default (props: IBlock) => {
  let left = props.order % 2 === 1
  let first: boolean = props.order === 1

  return (
    <BlockContainer>
      <ContentContainer
        left={left}
      >
        {left ? <SideBorder
          first={first}
          last={props.last}
        /> :
          <Text
            header={props.header}
            dates={props.dates}
            content={props.content}
          />
        }
        <Avatar
          left={left}
          avatarUrl={props.avatarUrl}
        />
        {!left ? <SideBorder
          first={first}
          last={props.last}
        /> :
          <Text
            header={props.header}
            dates={props.dates}
            content={props.content}
          />
        }
      </ContentContainer>
      {!props.last && <BottomBorder />}
    </BlockContainer>
  )
}