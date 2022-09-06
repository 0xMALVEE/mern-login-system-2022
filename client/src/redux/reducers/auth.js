import * as actionType from '../const/actionsTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('user_info', JSON.stringify({ ...action?.data }));
      console.log(action.data)
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;