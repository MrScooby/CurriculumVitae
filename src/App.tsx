import React from 'react'

import GlobalStyles from '../src/styles/global'
import Theme from '../src/styles/theme'

import AppContainer from './components/appContainer'
import Navbar from './components/navbar'
import Intro from './components/intro'
import Experience from './components/experience'

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Intro
          name={'MACIEJ KUBICZEK'}
          role={'Full-stack Web Developer'}
          pictureUrl={'/public/img/avatar.jpeg'}
        />
        <Experience />
      </AppContainer>
    </Theme>
  )
}

export default App;
