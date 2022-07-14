import { createGlobalStyle } from 'styled-components'
import "@fontsource/open-sans"

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none !important;
    text-decoration: none;
    list-style: none !important;
    font-family: Open Sans !important; 
    
    @media (max-width: 768px) {
      h1, h2, h3 { 
        text-align: center;
      }
    }
  }
`