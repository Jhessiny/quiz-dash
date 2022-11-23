import { useState } from 'react'
import { useGetQuizDataQuery } from '~/presentation/hooks/api-endpoints'
import { Question } from './components'
import { useStyles } from './quiz-styles'

const Quiz = () => {
  const { classes } = useStyles()
  const { data, isError, isLoading } = useGetQuizDataQuery({ quizId: '123' })
  console.log({ isError })
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleResponse = () => {
    setCurrentQuestion((prev) => prev + 1)
  }

  if (isLoading) return <p>loading...</p>
  const question = data?.questions[currentQuestion]
  const showQuiz = data && question

  return (
    <div className={classes.root}>
      {showQuiz && (
        <div className={classes.paper}>
          <h2>{data.title}</h2>
          <Question
            title={question.title}
            answers={question.answers}
            handleResponse={handleResponse}
          />
        </div>
      )}
    </div>
  )
}

export default Quiz
