import { createStore } from 'redux';
import reducer from './reducer';

const store: any = createStore(reducer)

export default store