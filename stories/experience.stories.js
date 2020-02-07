import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'

import Experience from '../src/components/experience/experience'
import Block from '../src/components/experience/block/block'

storiesOf('Experience', module)
  .add('Full', () => {
    return (
      <Experience />
    )
  })