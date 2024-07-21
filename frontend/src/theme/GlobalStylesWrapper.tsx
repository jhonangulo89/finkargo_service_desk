import GlobalStyles from '@mui/material/GlobalStyles'
// import { height } from '@mui/system'

interface GlobalStylesWrapperProps {
  children: React.ReactNode
}

const GlobalStylesWrapper = ({
  children
}: GlobalStylesWrapperProps): JSX.Element => {
  return (
    <>
      <GlobalStyles
        styles={{
          'html, body, #root': {
            width: '100vw',
            height: '100vh'
          }
          //   '*::-webkit-scrollbar': { width: '8px', height: '8px' },
          //   '*::-webkit-scrollbar-thumb': {
          //     borderRadius: '4px',
          //     backgroundColor: '#B2B0D8'
          //   },
          //   '*::-webkit-scrollbar-track': {
          //     borderRadius: '4px',
          //     backgroundColor: '#E3E2F4'
          //   },
          //   '.MuiInputBase-input.Mui-disabled': {
          //     // WebkitTextFillColor: theme.palette.grey[400]
          //   },
          //   '.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled': {
          //     // WebkitTextFillColor: theme.palette.grey[400]
          //   }
          //   '.notistack-SnackbarContainer': {
          //     top: '70px'
          //   }
        }}
      />
      {children}
    </>
  )
}

export default GlobalStylesWrapper
