import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducerRoot from './reducers/reducerRoot'

export default function configureStore () {
  return createStore(reducerRoot, applyMiddleware(thunk))
}
