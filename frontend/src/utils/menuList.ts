import {
  Home,
  Analytics,
  AccountTree,
  SpaceDashboard,
  BugReport
} from '@mui/icons-material'

const menuItems = [
  {
    id: '1',
    option: 'dashboard',
    displayName: 'Dashboard',
    icon: Home,
    path: '/'
  },
  {
    id: '2',
    option: 'tickets',
    displayName: 'Tickets',
    icon: BugReport,
    path: '/tickets'
  },
  {
    id: '3',
    option: 'projects',
    displayName: 'Proyectos',
    icon: AccountTree,
    path: '/projects'
  },
  {
    id: '4',
    option: 'kanban',
    displayName: 'Kanban',
    icon: SpaceDashboard,
    path: '/kanban'
  },
  {
    id: '5',
    option: 'reports',
    displayName: 'Reportes',
    icon: Analytics,
    path: '/Reports'
  }
]

export default menuItems
