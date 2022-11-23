import { RootState } from './../../../types'
import { QuizState } from './../types'
import { SavedAnswerModel } from '~/domain/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: QuizState = {
  answers: [],
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addAnswers: (state, action: PayloadAction<SavedAnswerModel>) => {
      state.answers.push(action.payload)
    },
  },
})

export const { addAnswers } = quizSlice.actions
export const selectAnswers = (state: RootState) => state.quiz.answers

export default quizSlice.reducer
