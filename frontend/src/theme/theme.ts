import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2'
    },
    secondary: {
      main: '#504AE2'
    },
    error: {
      main: '#D0021B'
    },
    warning: {
      main: '#F5A623'
    },
    info: {
      main: '#50E3C2'
    },
    success: {
      main: '#7ED321'
    },
    background: {
      default: '#EEF2F6',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#364152',
      secondary: '#697586'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem'
    }
  },
  spacing: 8, // Default spacing unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  }
})

export default theme
