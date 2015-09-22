import xhr from 'xhr';

export const PROCESS_USER = "PROCESS_USER";
export const USER_LOGIN = "USER_LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const USER_LOGOUT= "USER_LOGOUT";

function userLogin(user) {
  return {type: "USER_LOGIN", user}
}

function userLogout(user) {
  return {type: "USER_LOGOUT", user}
}

function loginFailed(user){
  return {type: "LOGIN_FAILED", user}
}

function processUser(user){
  return {type: "PROCESS_USER", user}
}

export function authenticate(user) {
  return dispatch => {
    dispatch(processUser(user))
    return xhr({
      json: {user},
      uri: 'http://localhost:3000/authenticate',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }, function (err, resp, body) {
      if(resp.statusCode >= 300) {
        dispatch(loginFailed(user))
      } else {
        if(resp.body.auth_token) {
          user['auth_token'] = resp.body.auth_token
          dispatch(userLogin(user))
        } else {
          dispatch(loginFailed(user))
        }
      }
    })
  }
}
