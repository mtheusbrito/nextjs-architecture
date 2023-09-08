import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme,createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle``;
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
