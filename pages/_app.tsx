import type { AppProps } from 'next/app'
import { createGlobalStyle} from 'styled-components'
import "@fontsource/open-sans";
import { CartProdiver } from '../context/CartContext';

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none !important;
    text-decoration: none;
    list-style: none !important;
    font-family: Open Sans !important; 
  }
  
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CartProdiver>
        <Component {...pageProps} />
      </CartProdiver>

    </>
  )
}

export default MyApp
