import { useState } from 'react'
import { useGetQuizDataQuery } from '~/presentation/hooks/api-endpoints'
import { Question, FinalStep } from '../'
import { useStyles } from './quiz-modal-styles'
import clsx from 'clsx'
import { Spinner } from '~/presentation/components'
import { SavedAnswersModel } from '~/domain/models'

const QuizModal = () => {
  const { classes } = useStyles()
  const { data, isLoading } = useGetQuizDataQuery({ quizId: '123' })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<SavedAnswersModel[]>([])

  const handleResponse = (answer: SavedAnswersModel) => {
    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1)
      setAnswers((prev) => [...prev, answer])
    }, 300)
  }

  const question = data?.questions[currentQuestion]

  const isFinalStep = data && currentQuestion >= data?.questions.length

  return (
    <div className={classes.paper}>
      {isLoading && <Spinner scale={0.6} />}
      {isFinalStep && <FinalStep />}
      {data && !isFinalStep && (
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
          <Question {...question!} handleResponse={handleResponse} />
        </>
      )}
    </div>
  )
}

export default QuizModal
