interface State {
  focused: boolean
}

const defaultState = {
  focused: false
}

function reducer(state: State = defaultState, action: object) {
 return state
}

export default reducer
