import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import quizReducer from '~/store/features/quiz/slice/quiz-slice'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { api } from '~/store/api/api-slice'

import { AppDispatch, RootState } from './types'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
