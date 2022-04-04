import * as React from 'react'
import {Spinner} from './components/Spinner'
import { useAuth } from './context/auth'

const DashboardPage = React.lazy(() =>
  import(/* webpackPrefetch: true */ './authenticated-app'),
)
const HomePage = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const {user} = useAuth()
  console.log(user)
  return (
    <React.Suspense fallback={<Spinner />}>
      {user ? <DashboardPage /> : <HomePage />}
    </React.Suspense>
  )
}

export {App}
