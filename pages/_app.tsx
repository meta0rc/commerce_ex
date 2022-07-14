import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { CartProdiver } from '../context/Cart/CartContext';
import { ProductProvider } from '../context/Products/ProductProvider';
import { GlobalStyles, Theme } from '../theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ProductProvider>
        <CartProdiver>
          <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CartProdiver>
      </ProductProvider>

    </>
  )
}

export default MyApp
