import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import persistState from 'redux-localstorage'
import App from './containers/App'
import todoApp from './reducers'

const createPersistentStore = compose(
  persistState('todos')
)(createStore)

const store = createPersistentStore(todoApp)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
