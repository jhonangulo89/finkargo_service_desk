import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Home } from '@mui/icons-material'
import menuItems from '@utils/menuList'

const PageTitle = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const menuOption = menuItems.find((item) => item.path === location.pathname)
  const displayName = menuOption?.displayName || ''

  return (
    <Box sx={{ marginBottom: 2 }}>
      {/* <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&.MuiCardContent-root:last-child': {
            paddingBottom: 2
          }
        }}
      > */}

      <Breadcrumbs maxItems={3} aria-label="breadcrumb">
        <Link component={RouterLink} underline="hover" color="inherit" to="/">
          <Home color="primary" />
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1
          const option = menuItems.find((item) => item.option === `${value}`)

          return last ? (
            <Typography color="text.primary" key={displayName}>
              {displayName}
            </Typography>
          ) : (
            <Link
              key={displayName}
              component={RouterLink}
              underline="hover"
              color="inherit"
              to={option?.path ?? '#'}
            >
              {option?.displayName}
            </Link>
          )
        })}
      </Breadcrumbs>
      {/* </CardContent> */}

      <Typography variant="h2" component="h1" mt={1}>
        {displayName}
      </Typography>
    </Box>
  )
}

export default PageTitle
