import { Suspense } from 'react'
import { Router } from './router/router'
import { Provider } from 'react-redux'
import { store } from '~/store/store'
import { Spinner } from '~/presentation/components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Router />
        <ToastContainer />
      </Suspense>
    </Provider>
  )
}
export default App
