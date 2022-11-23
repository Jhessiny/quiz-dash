import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryAdapter } from '~/store/adapter/base-query-adapter'

export const api = createApi({
  baseQuery: baseQueryAdapter,
  endpoints: () => ({}),
})
