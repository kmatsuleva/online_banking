let nextAccountsId = 0;
export const createAccount = (title, currency) => ({
  type: "CREATE_ACCOUNT",
  id: nextAccountsId++,
  title,
  currency
});


const accounts = (state = [], action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          currency: action.currency
        }
      ];

  
    default:
      return state;
  }
};

export default accounts;
