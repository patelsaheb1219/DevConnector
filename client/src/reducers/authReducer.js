const intialState = {
  isAuthenticated: false,
  user: {}
};

export default function combineReducer(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
