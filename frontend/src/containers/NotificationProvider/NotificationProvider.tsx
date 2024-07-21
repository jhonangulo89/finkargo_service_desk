import { Delete } from '@mui/icons-material'
import { Grow, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { closeSnackbar, SnackbarProvider, SnackbarKey } from 'notistack'
import { ReactNode } from 'react'

interface NotificationProviderProps {
  children: ReactNode
}

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const theme = useTheme()
  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate
      autoHideDuration={10000}
      TransitionComponent={Grow}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      action={(snackbarId: SnackbarKey) => (
        <IconButton
          aria-label="delete"
          onClick={() => closeSnackbar(snackbarId)}
        >
          <Delete
            sx={{
              color: theme.palette.common.white
            }}
          />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  )
}

export default NotificationProvider
