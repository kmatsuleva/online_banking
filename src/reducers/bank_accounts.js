const CREATE_BANK_ACCOUNT = 'CREATE_BANK_ACCOUNT';
const DELETE_BANK_ACCOUNT = 'DELETE_BANK_ACCOUNT';
const GET_BANK_ACCOUNT = 'GET_BANK_ACCOUNT';
const GET_BANK_ACCOUNT_SUCCESS = 'GET_BANK_ACCOUNT_SUCCESS';

let nextAccountsId = 0;
export const createAccount = (title, balance, currency) => ({
    type: CREATE_BANK_ACCOUNT,
    id: nextAccountsId++,
    title,
    balance,
    currency
});

export const deleteAccount = id => ({
  type: DELETE_BANK_ACCOUNT,
  id
});

export const getAccounts = (title, balance, currency) => ({
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
})


export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BANK_ACCOUNT:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          balance: action.balance,
          currency: action.currency
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
