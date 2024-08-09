import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// import './index.css'
import { GlobalStyle } from './styles/global.style.tsx'
import { ThemeProvider } from 'styled-components'
import primary from './styles/themes/primary.ts'
import Home from './components/home/home-component.tsx'
import Pacttos from './components/pacttos_chat/pacttos.component.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={primary}>
        <GlobalStyle />
          {/* <Home /> */}
          <Pacttos />
      </ThemeProvider>
   
  </StrictMode>,
)
