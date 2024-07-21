import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

interface NavbarProps {
  drawerWidth: number
  handleDrawerToggle: () => void
}

const Navbar = ({ drawerWidth, handleDrawerToggle }: NavbarProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: 'background.paper'
      }}
    >
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { md: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Agile Ticket Traker
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
