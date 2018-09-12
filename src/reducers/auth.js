const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'

export const checkAuth = (username, password) => {
  if(!username === 'admin' && !password === 'admin') {
        return;
  }
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
        loggedIn: !state.loggedIn,
        url: action.payload.url,
        data: action.payload.data
      };  
      
    case AUTH_LOGIN_FAILURE:
      console.log('asd')
      return {
        loggedIn: state.loggedIn
      }
    default:
      return state
  }
}
  
  