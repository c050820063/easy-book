import { combineReducers } from 'redux';
import { reducer as HeaderReducer } from '../common/header/store'

const reducer = combineReducers({
  Header: HeaderReducer,
})

export default reducer
