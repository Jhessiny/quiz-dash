import { AnswerModel, SavedAnswersModel } from '~/domain/models'
import { useStyles } from './answer-styles'

type Props = AnswerModel & {
  name: string
  questionId: string
  handleResponse: (answer: SavedAnswersModel) => void
}

export const Answer = ({ tag, text, score, name, id, handleResponse, questionId }: Props) => {
  const { classes } = useStyles()
  const handleChange = () => {
    const newAnswer = { questionId, score, id, tag }
    handleResponse(newAnswer)
  }
  return (
    <label key={tag} className={classes.inputWrapper}>
      <input
        className={classes.hidden}
        type='radio'
        value={tag}
        name={name}
        onChange={handleChange}
      />
      <span className={classes.radio}></span>
      <span>{text}</span>
    </label>
  )
}
