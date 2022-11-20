import { BrowserRouter, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { appRoutes } from './config'

const RouteElements = () => {
  const elements = useRoutes(
    appRoutes.map((route) => {
      if (route.isPrivate) return PrivateRoute({ route })
      return route
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
