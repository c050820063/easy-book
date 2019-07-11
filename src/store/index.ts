import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

const key: string = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'

const composeEnhancers =
  typeof window === 'object' &&
    window[key]
    ? window[key]({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
)

const store: any = createStore(reducer, enhancer)

// console.log(store)

export default store