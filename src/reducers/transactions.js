const VIEW_ALL_TRANSACTIONS = 'GET_BANK_ACCOUNT';
const VIEW_ALL_TRANSACTIONS_SUCCESS = 'GET_BANK_ACCOUNT_SUCCESS';

export const viewAllTransactions = () => {
  return {
    type: VIEW_ALL_TRANSACTIONS,
    payload: {
      request: { 
        url: '/transactions'
      }
    }
}}



export default (state = [], action) => {
  switch (action.type) {
    case VIEW_ALL_TRANSACTIONS_SUCCESS:
      return action.payload.data ;

    default:
      return state;
  }
};

