import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import {
  Home,
  Analytics,
  AccountTree,
  SpaceDashboard,
  BugReport
} from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

const MenuDrawer = () => {
  const theme = useTheme()
  const location = useLocation()
  const menuItems = [
    {
      id: '1',
      option: 'Dashboard',
      displayName: 'Dashboard',
      icon: Home,
      path: '/'
    },
    {
      id: '2',
      option: 'Tickets',
      displayName: 'Tickets',
      icon: BugReport,
      path: '/tickets'
    },
    {
      id: '3',
      option: 'Projects',
      displayName: 'Projects',
      icon: AccountTree,
      path: '/projects'
    },
    {
      id: '4',
      option: 'Kanban',
      displayName: 'Kanban',
      icon: SpaceDashboard,
      path: '/kanban'
    },
    {
      id: '5',
      option: 'Analítica',
      displayName: 'Analítica',
      icon: Analytics,
      path: '/analytics'
    }
  ]
  return (
    <div>
      <Toolbar />
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
