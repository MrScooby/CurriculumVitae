import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      concrete: string
      azureRadiance: string
      electricViolet: string
      white: string
      black: string
      tuna: string
      mineShaft: string
      dustyGray: string
      alto: string
      tundora: string
    },
    // TODO: figure out better way to do this
    breakpoints: any
  }
}