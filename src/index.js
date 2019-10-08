import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './redux/store'
reactDOM.render((
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
    
  </BrowserRouter>
), document.getElementById('root'))