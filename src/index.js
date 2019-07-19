import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import ServiceState from '../src/context/ServiceState'

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const AppWithContext = () => (
  <ServiceState>
    <AppWithRouter />
  </ServiceState>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

serviceWorker.unregister()
