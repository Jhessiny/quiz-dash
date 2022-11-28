import clsx from 'clsx'
import { RiLogoutBoxFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { menuRoutes } from '~/main/router/routes-config'
import { useStyles } from './navigation-bar-styles'

export const NavigationBar = () => {
  const { classes } = useStyles()
  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>MyQuiz App</h1>
      <ul>
        {menuRoutes.map(({ menuLink, path }) => (
          <li key={menuLink?.label}>
            <NavLink
              className={({ isActive }) =>
                isActive ? clsx(classes.item, classes.active) : classes.item
              }
              to={path}
            >
              <span className={classes.iconWrapper}>{menuLink?.icon}</span> {menuLink?.label}
            </NavLink>
          </li>
        ))}
        <li className={classes.item}>
          <span className={classes.iconWrapper}>
            <RiLogoutBoxFill />
          </span>
          Logout
        </li>
      </ul>
    </nav>
  )
}
