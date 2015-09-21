export const PROCESS_USER = "PROCESS_USER";
export const USER_LOGIN = "USER_LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const USER_LOGOUT= "USER_LOGOUT";

export function userLogin(user) {
  return {type: "USER_LOGIN", user}
}

function userLogout(user) {
  return {type: "USER_LOGOUT", user}
}

function loginFailed(user){
  return {type: "LOGIN_FAILED", user}
}

function sendUser(user){
  return {type: "SEND_USER", user}
}
