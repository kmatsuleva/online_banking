let nextAccountsId = 0;
export const createAccount = text => ({
  type: "CREATE_ACCOUNT",
  id: nextAccountsId++,
  text
});

const accounts = (state = [], action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];

    default:
      return state;
  }
};

export default accounts;
