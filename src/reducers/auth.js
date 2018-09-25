const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'

export const checkAuth = (username, password) => {
  console.log('auth')
  return {
    type: AUTH_LOGIN,
    payload: {
      request:{
        method: 'post',
        url:'/login',
        data: {
            username,
            password
        }
      }
    }
  }
}


export default (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        url: action.payload.url,
        data: action.payload.data
      };  
      
    case AUTH_LOGIN_FAILURE:
      return {
        loggedIn: false
      }
    default:
      return state
  }
}
  
  