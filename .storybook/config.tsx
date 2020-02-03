import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import GlobalStyles from '../src/styles/global'
import Theme from '../src/styles/theme'

const req = require.context('../stories', true, /.stories.tsx$/)

addDecorator(withKnobs)
addDecorator((story) => {
  return (
    <Theme>
      <GlobalStyles />
        {story()}
    </Theme>
  )
})

configure(req, module)
