/* eslint-disable @stylistic/max-len */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Success />
      <GlobalStyle />
    </ThemeProvider>
  )
}
