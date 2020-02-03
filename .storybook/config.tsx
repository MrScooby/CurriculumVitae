import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../stories', true, /.stories.tsx$/)

addDecorator(withKnobs)
addDecorator((story) => {
  return (
    <>
      {story()}
    </>
  )
})

configure(req, module)
