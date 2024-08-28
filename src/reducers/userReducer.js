// src/reducers/userReducer.js
const initialState = {
    preferences: {}
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PREFERENCES':
        return {
          ...state,
          preferences: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  