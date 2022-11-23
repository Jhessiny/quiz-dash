import { Suspense } from 'react'
import { Router } from './router/router'
import { Provider } from 'react-redux'
import { store } from '~/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>...loading</p>}>
        <Router />
      </Suspense>
    </Provider>
  )
}
export default App
