import { useStyles } from './quiz-styles'
import QuizModal from './components/quiz-modal/quiz-modal'

const Quiz = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <QuizModal />
    </div>
  )
}

export default Quiz
