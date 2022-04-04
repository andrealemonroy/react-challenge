import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { LoginProvider } from './auth'


function AppProvider({children}) {
  return (
      <Router>
        <LoginProvider>{children}</LoginProvider>
      </Router>
  )
}

export {AppProvider}
