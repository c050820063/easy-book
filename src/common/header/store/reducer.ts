import * as actionTypes from './actionTypes';

interface State {
  focused: boolean
}
interface Action {
  type: string,
  value?: any
}

const defaultState: State = {
  focused: false
}

function reducer(state: State = defaultState, action: Action): State {
  switch(action.type) {
    case actionTypes.CHANGE_FOCUESD:
      return {
        ...state,
        focused: action.value
      }
  }
 return state
}

export default reducer