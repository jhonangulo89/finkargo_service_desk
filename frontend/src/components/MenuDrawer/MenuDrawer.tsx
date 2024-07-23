import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { Link, useLocation } from 'react-router-dom'
import menuItems from '@utils/menuList'
import attLogo from '@assets/logo.svg'

const MenuDrawer = () => {
  const theme = useTheme()
  const location = useLocation()

  return (
    <div>
      <Toolbar>
        <img src={attLogo} className="logo react" alt="React logo" />
        <Typography variant="h6" noWrap component="div" color="secondary">
          gile Ticket Traker
        </Typography>
      </Toolbar>
      <List
        sx={{
          p: 2
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 2,
                marginBottom: '4px',
                transition: 'ease-in-out background 200ms',
                '&.Mui-selected': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.primary.main,
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main
                  }
                },
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  color: 'primary.main',
                  borderRadius: 2,
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main'
                  }
                }
              }}
            >
              <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
              <ListItemText primary={item.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuDrawer
