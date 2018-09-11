const CREATE_BANK_ACCOUNT = 'CREATE_BANK_ACCOUNT';
const DELETE_BANK_ACCOUNT = 'DELETE_BANK_ACCOUNT';

let nextAccountsId = 0;
export const createAccount = (title, currency) => ({
  type: CREATE_BANK_ACCOUNT,
  id: nextAccountsId++,
  title,
  currency
});

export const deleteAccount = id => ({
  type: DELETE_BANK_ACCOUNT,
  id
});

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BANK_ACCOUNT:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          currency: action.currency
        }
      ];

    case DELETE_BANK_ACCOUNT:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
