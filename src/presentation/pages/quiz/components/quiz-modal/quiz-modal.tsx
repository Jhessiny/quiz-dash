import { useState } from 'react'
import { useGetQuizDataQuery } from '~/presentation/hooks/api-endpoints'
import { Question, FinalStep } from '../'
import { useStyles } from './quiz-modal-styles'
import clsx from 'clsx'
import { Spinner } from '~/presentation/components'
import { SavedAnswerModel } from '~/domain/models'
import { useParams } from 'react-router-dom'

export const QuizModal = () => {
  const { classes } = useStyles()
  const params = useParams<{ quizId: string }>()
  const { data, isLoading } = useGetQuizDataQuery({ quizId: params.quizId! })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<SavedAnswerModel[]>([])

  const handleResponse = (answer: SavedAnswerModel) => {
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
