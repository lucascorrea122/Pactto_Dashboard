import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/page/App.tsx'

// import './index.css'
import { GlobalStyle } from './styles/global.style.tsx'
import { ThemeProvider } from 'styled-components'
import primary from './styles/themes/primary.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={primary}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
   
  </StrictMode>,
)
