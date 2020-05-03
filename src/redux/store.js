import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import bookReducer from './book/bookReducer'

const store = createStore(bookReducer, 
  composeWithDevTools(applyMiddleware(logger)))

export default store;