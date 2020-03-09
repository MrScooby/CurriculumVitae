import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'

import Experience from '../src/components/experience/index'

storiesOf('Experience', module)
  .add('Full', () => {
    return (
      <Experience />
    )
  })