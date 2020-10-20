import { combineReducers } from 'redux'
import reducer from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  reducer,
  visibilityFilter
})