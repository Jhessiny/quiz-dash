import { useState } from 'react'
import { useGetQuizDataQuery } from '~/presentation/hooks/api-endpoints'
import { Question } from '../'
import { useStyles } from './quiz-modal-styles'
import clsx from 'clsx'
import { Spinner } from '~/presentation/components'

const QuizModal = () => {
  const { classes } = useStyles()
  const { data, isLoading } = useGetQuizDataQuery({ quizId: '123' })
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleResponse = () => {
    setCurrentQuestion((prev) => prev + 1)
  }

  const getQuestion = () => data?.questions[currentQuestion]

  return (
    <div className={classes.paper}>
      {isLoading && <Spinner scale={0.6} />}
      {data && (
        <>
          <h2>{data.title}</h2>
          <div className={classes.divider}>
            {data.questions.map((item, index) => (
              <div
                key={item.title}
                className={clsx(classes.progress, { [classes.active]: index <= currentQuestion })}
              ></div>
            ))}
          </div>
          <Question
            title={getQuestion()!.title}
            answers={getQuestion()!.answers}
            handleResponse={handleResponse}
          />
        </>
      )}
    </div>
  )
}

export default QuizModal
