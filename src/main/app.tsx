import { Suspense } from 'react'
import { Router } from './router/router'

const App = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Router />
    </Suspense>
  )
}
export default App
