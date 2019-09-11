import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import App from './App'
import userReducer from './reducers/user-reducer'
import navigationReducer from './reducers/navigation-reducer'
import './index.css'

const REDUCERS = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
})
/* eslint-disable no-underscore-dangle */
const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const STORE = createStore(
  REDUCERS,
  {
    user: 'UNKNOWN',
  },
  allStoreEnhancers,
)

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
