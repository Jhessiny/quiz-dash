import { Link } from 'react-router-dom'
import { useStyles } from './navigation-bar-styles'

export const NavigationBar = () => {
  const { classes } = useStyles()
  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>MyQuiz App</h1>
      <ul>
        <li>
          <Link className={classes.item} to='/contacts'>
            Contacts
          </Link>
        </li>
        <li>
          <Link className={classes.item} to='/analytics'>
            Analytics
          </Link>
        </li>
        <li>
          <Link className={classes.item} to='/quizzes'>
            Quizzes
          </Link>
        </li>
        <li>
          <Link className={classes.item} to='/new-quiz'>
            New Quiz
          </Link>
        </li>
        <li className={classes.item}>Logout</li>
      </ul>
    </nav>
  )
}
