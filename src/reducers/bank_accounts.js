const CREATE_BANK_ACCOUNT = 'CREATE_BANK_ACCOUNT';
const CREATE_BANK_ACCOUNT_SUCCESS = 'CREATE_BANK_ACCOUNT_SUCCESS';
const DELETE_BANK_ACCOUNT = 'DELETE_BANK_ACCOUNT';
const GET_BANK_ACCOUNT = 'GET_BANK_ACCOUNT';
const GET_BANK_ACCOUNT_SUCCESS = 'GET_BANK_ACCOUNT_SUCCESS';

let nextAccountsId = 0;

export const createAccount = (title, balance, currency) => { 
  console.log('i am in action "create account" ')
  return {
    type: CREATE_BANK_ACCOUNT,
    payload: {
      request:{
        method: 'post',
        url:'/accounts',
        params: {
          id: nextAccountsId++,
          title,
          balance,
          currency
        }
      }
    }
  }
}

export const deleteAccount = id => ({
  type: DELETE_BANK_ACCOUNT,
  id
});

export const getAllAccounts = (title, balance, currency) => {
  console.log('i am in action "get accounts" ')
  return {
    type: GET_BANK_ACCOUNT,
    payload: {
      request:{
        method: 'get',
        url:'/accounts',
        params: {
          title,
          balance,
          currency
        }
      }
    }
}}


export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case CREATE_BANK_ACCOUNT_SUCCESS:
      return [
        ...state,
        {
          url: action.payload.url,
          params: action.payload.params
        }
      ];

    case GET_BANK_ACCOUNT_SUCCESS:
      return [
        ...state,
        {
          url: action.payload.url,
          params: action.payload.params
        }
      ];
    

    case DELETE_BANK_ACCOUNT:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
