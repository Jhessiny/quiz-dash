import { Suspense } from 'react'
import { Router } from './router/router'
import { Provider } from 'react-redux'
import { store } from '~/store/store'
import { Spinner } from '~/presentation/components'

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </Provider>
  )
}
export default App
