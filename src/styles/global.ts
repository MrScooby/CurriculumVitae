import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  
  html {
    font-family: EB Garamond, Sans-Serif, serif;
    font-size: 16px;
  }
  
  body {
    overflow-x: hidden;
    line-height: 1;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

/* eb-garamond-regular - latin */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 400;
  src: url('/public/fonts/eb-garamond-v13-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/eb-garamond-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/eb-garamond-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/eb-garamond-v13-latin-regular.svg#EBGaramond') format('svg'); /* Legacy iOS */
}
/* eb-garamond-500 - latin */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 500;
  src: url('/public/fonts/eb-garamond-v13-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/eb-garamond-v13-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/eb-garamond-v13-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/eb-garamond-v13-latin-500.svg#EBGaramond') format('svg'); /* Legacy iOS */
}
/* eb-garamond-600 - latin */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 600;
  src: url('/public/fonts/eb-garamond-v13-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/eb-garamond-v13-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/eb-garamond-v13-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/eb-garamond-v13-latin-600.svg#EBGaramond') format('svg'); /* Legacy iOS */
}
/* eb-garamond-700 - latin */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 700;
  src: url('/public/fonts/eb-garamond-v13-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/eb-garamond-v13-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/eb-garamond-v13-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/eb-garamond-v13-latin-700.svg#EBGaramond') format('svg'); /* Legacy iOS */
}
/* eb-garamond-800 - latin */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 800;
  src: url('/public/fonts/eb-garamond-v13-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/public/fonts/eb-garamond-v13-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/public/fonts/eb-garamond-v13-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/public/fonts/eb-garamond-v13-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/public/fonts/eb-garamond-v13-latin-800.svg#EBGaramond') format('svg'); /* Legacy iOS */
}
`
