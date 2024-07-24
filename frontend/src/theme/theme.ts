import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3'
      // main: '#4A90E2'
    },
    secondary: {
      main: '#673AB7'
    },
    error: {
      main: '#C62828'
    },
    warning: {
      main: '#FFC107'
    },
    info: {
      main: '#50E3C2'
    },
    success: {
      main: '#00E676'
    },
    background: {
      default: '#EEF2F6',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#121926',
      secondary: '#697586'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: 1.167
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.167
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.235
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.334
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5em',
      letterSpacing: 0
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.75'
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'capitalize'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    overline: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: 2.66,
      textTransform: 'uppercase'
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
