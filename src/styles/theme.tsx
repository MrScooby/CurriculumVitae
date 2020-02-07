import React from "react"
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as ThemeProviderSC } from "styled-components"
import { ThemeProvider as ThemeProviderMU } from '@material-ui/core/styles'
import { withTheme } from '@material-ui/core'

const themeApp = {
  colors: {
    concrete: '#F2F2F2',
    white: '#ffffff',
    black: '#000000',
    tuna: '#34353D',
    mineShaft: '#282828',
    dustyGray: '#9B9B9B'
  }
}

let StyledComponentsTheme = (props: any) => {
  return (
    <ThemeProviderSC theme={Object.assign(themeApp, props.theme)}>
      {props.children}
    </ThemeProviderSC>
  )
}
const StyledComponents = withTheme(StyledComponentsTheme)

let muTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920
    }
  }
})
muTheme = responsiveFontSizes(muTheme);

const Theme = ({ children }: IChildren) => (
  <ThemeProviderMU theme={muTheme}>
    <StyledComponents>
      {children}
    </StyledComponents>
  </ThemeProviderMU>
)

export default Theme