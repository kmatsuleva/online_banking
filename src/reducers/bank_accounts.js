const CREATE_BANK_ACCOUNT = 'CREATE_BANK_ACCOUNT';
const CREATE_BANK_ACCOUNT_SUCCESS = 'CREATE_BANK_ACCOUNT_SUCCESS';
const DELETE_BANK_ACCOUNT = 'DELETE_BANK_ACCOUNT';
const DELETE_BANK_ACCOUNT_SUCCESS = 'DELETE_BANK_ACCOUNT_SUCCESS';
const GET_BANK_ACCOUNT = 'GET_BANK_ACCOUNT';
const GET_BANK_ACCOUNT_SUCCESS = 'GET_BANK_ACCOUNT_SUCCESS';

let nextAccountsId = 0;

export const createAccount = (title, balance, currency) => { 
  return {
    type: CREATE_BANK_ACCOUNT,
    payload: {
      request: {
        method: 'post',
        url:'/accounts',
        data: {
          id: nextAccountsId++,
          title,
          balance,
          currency
        }
      }
    }
  }
}


export const getAllAccounts = () => {
  return {
    type: GET_BANK_ACCOUNT,
    payload: {
      request: { 
        url:'/accounts'
      }
    }
}}


export const deleteAccount = id => {
  return {
    type: DELETE_BANK_ACCOUNT,
    payload: {
      request: {
        method: 'delete',
        url: '/accounts',
        data: {
          id
        }
      }
    }
  }
}


export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BANK_ACCOUNT_SUCCESS:
      return [
        {
          title: action.payload.data.title,
          balance: action.payload.data.balance,
          currency: action.payload.data.currency
        },
        ...state
      ];
     
    
    case GET_BANK_ACCOUNT_SUCCESS:
      return action.payload.data 
    
    case DELETE_BANK_ACCOUNT_SUCCESS:  
      return state.filter(({ id }) => id !== action.payload.data.id);
      
    default:
      return state;
  }
};

