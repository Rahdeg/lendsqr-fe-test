export const actionType = {
  SET_USER: "SET_USER",
  SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        userinfo: action.userinfo,
      };
      case actionType.SET_USERS:
      return {
        ...state,
        usersinfo: action.usersinfo,
      };
    default:
      return state;
  }
};

export default reducer;
