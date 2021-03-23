import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: '#fff';
    background-size: cover; 
    background-image: url('/images/background2.jpg');

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
