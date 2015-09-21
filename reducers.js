import { combineReducers } from 'redux';
import { PROCESS_USER, USER_LOGIN, LOGIN_FAILED, USER_LOGOUT } from './actions/userSession';

function user(state={
  processing: false,
  Loggedin: false,
  info: []
}, action){
  switch(action.type){
    case PROCESS_USER:
      return Object.assign({}, state, {
      proceccing: true
    })
    case USER_LOGIN:
      return Object.assign({}, state, {
        proceccing: false,
        Loggedin: true,
        info: action.user
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        proceccing: false,
        Loggedin: false
      });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        proceccing: false,
        Loggedin: false
      });
    default:
      return state;
  }
} 

const rootReducer = combineReducers({
  user
})

export default rootReducer;
