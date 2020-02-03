import React from 'react'

import GlobalStyles from '../src/styles/global'
import Theme from '../src/styles/theme'

import AppContainer from './components/appContainer'

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyles />
      <AppContainer>

      </AppContainer>
    </Theme>
  )
}

export default App;
