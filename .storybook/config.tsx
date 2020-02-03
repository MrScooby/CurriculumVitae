import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import GlobalStyles from '../src/styles/global'
import Theme from '../src/styles/theme'

import AppContainer from '../src/components/appContainer'

const req = require.context('../stories', true, /.stories.tsx$/)

addDecorator(withKnobs)
addDecorator((story) => {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        {story()}
      </AppContainer>
    </Theme>
  )
})

configure(req, module)
