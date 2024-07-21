import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2' // Azul Cielo
    },
    secondary: {
      main: '#7ED321' // Verde Menta
    },
    error: {
      main: '#D0021B' // Rojo Suave
    },
    warning: {
      main: '#F5A623' // Naranja Cálido
    },
    info: {
      main: '#50E3C2' // Turquesa
    },
    success: {
      main: '#7ED321' // Verde Menta
    },
    background: {
      default: '#F7F7F7', // Blanco Crema
      paper: '#FFFFFF' // Blanco para papel
    },
    text: {
      primary: '#4A4A4A', // Gris Oscuro
      secondary: '#9E9E9E' // Gris Claro (menos llamativo)
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
