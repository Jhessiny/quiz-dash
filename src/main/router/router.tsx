import { BrowserRouter, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { LayoutConfig } from './layout-config'
import { appRoutes } from './routes-config'

const RouteElements = () => {
  const elements = useRoutes(
    appRoutes.map((route) => {
      const Layout = LayoutConfig[route.layout].component
      const WithLayout = {
        ...route,
        element: <Layout>{route.element}</Layout>,
      }
      if (route.isPrivate) return PrivateRoute({ route: WithLayout })
      return WithLayout
    }),
  )
  return elements
}

const PrivateRoute = ({ route }: { route: RouteObject }) => {
  const isAuthenticated = false

  if (isAuthenticated)
    return {
      ...route,
      element: <Navigate to='/' />,
    }

  return route
}

export const Router = () => {
  return (
    <BrowserRouter>
      <RouteElements />
    </BrowserRouter>
  )
}
