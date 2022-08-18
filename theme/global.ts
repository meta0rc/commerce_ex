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
    font-family: 'Montserrat', sans-serif;
    body { 
      background: #f5f5f57d;
    }
    @media (max-width: 768px) {
  
      }
    }
  }
`