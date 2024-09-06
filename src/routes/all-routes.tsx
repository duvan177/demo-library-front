import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { EXPLORER_HOME, EXPLORER_LANDING, HOME_PATH } from './paths/all-paths'

const HomeView = lazy(() => import('@/components/pages/Home/Home'))
const ExplorerView = lazy(() => import('@/components/pages/Explorer/Explorer'))
const ExplorerLandingView = lazy(() => import('@/components/pages/Explorer/components/LandingPage/LandingPage'))

export const routes: RouteObject[] = [
  {
    path: EXPLORER_HOME,
    element: <ExplorerView />
  },
  {
    path: HOME_PATH,
    element: <HomeView />
  },
  {
    path: EXPLORER_LANDING,
    element: <ExplorerLandingView />
  }
]

export default routes
