import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@theme/theme.ts'
import AppRoutes from '@routes/Routes.tsx'
import GlobalStylesWrapper from '@theme/GlobalStylesWrapper.tsx'
import NotificationProvider from '@containers/NotificationProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <CssBaseline />
        <GlobalStylesWrapper>
          <AppRoutes />
        </GlobalStylesWrapper>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
