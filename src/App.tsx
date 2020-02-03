import React from 'react'

import GlobalStyles from '../src/styles/global'
import Theme from '../src/styles/theme'

const App: React.FC = () => {
  return (
    <Theme>
      <GlobalStyles />
    </Theme>
  )
}

export default App;
