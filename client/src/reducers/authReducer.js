const intialState = {
  isAuthenticated: false,
  users: {}
};

export default function combineReducer(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
