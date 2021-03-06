import React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from '../src/components/navbar'
import Intro from '../src/components/intro'

storiesOf('Full', module)
  .add('Full', () => {
    return (
      <>
        <Navbar />
        <Intro
          name={'MACIEJ KUBICZEK'}
          role={'Full-stack Web Developer'}
          pictureUrl={'https://media-exp1.licdn.com/dms/image/C4E03AQHOFZVI4Jy2Xg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=kJIHNM3p8wTXCLCxyGwpzC6q4yB_bMQuc1Rn6uHVRTk'}
        />
      </>
    )
  })