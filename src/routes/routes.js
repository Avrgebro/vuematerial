import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import Maps from '@/pages/Maps.vue'
import Login from '@/pages/Login.vue'
import Reportes from '@/pages/Reportes.vue'
import Tracking from '@/pages/Tracking.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: 'login',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'tracking',
        name: 'Tracking',
        component: Tracking
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'reportes',
        name: 'Reportes',
        component: Reportes
      },
      {
        path: 'maps',
        name: 'Mapas',
        meta: {
          hideFooter: true
        },
        component: Maps
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes
