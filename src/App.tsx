import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>In progress...</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio soluta vitae modi eligendi voluptate quidem in minus totam ipsa. Possimus nulla placeat unde dicta, voluptatibus veritatis blanditiis ducimus. Distinctio!
      </p>
      <GlobalStyle />
    </ThemeProvider>
  )
}
