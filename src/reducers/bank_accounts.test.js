import * as actions from "./bank_accounts";
import accountsReducer from "./bank_accounts";

describe("accounts actions", () => {
  it("createAccount should create CREATE_BANK_ACCOUNT action", () => {
    expect(actions.createAccount("First account", 600, "BGN")).toEqual({
      type: "CREATE_BANK_ACCOUNT",
      id: 0,
      title: "First account",
      balance: 600,
      currency: "BGN"
    });
  });

  it("deleteAccount should create DELETE_BANK_ACCOUNT action", () => {
    expect(actions.deleteAccount(1)).toEqual({
      type: "DELETE_BANK_ACCOUNT",
      id: 1
    });
  });
});


describe("accountsReducer reducer", () => {
  it("should handle initial state", () => {
    expect(accountsReducer(undefined, {})).toEqual([]);
  });

  it('should handle CREATE_BANK_ACCOUNT', () => {
    expect(
      accountsReducer([
        {
          title: 'First account',
          balance: 400,
          currency: 'USD',
          id: 0
        }
      ], {
          type: 'CREATE_BANK_ACCOUNT',
          title: 'Second account',
          balance: 0,
          currency: 'EUR',
          id: 1
        })
    ).toEqual([
      {
        title: 'First account',
        balance: 400,
        currency: 'USD',
        id: 0
      }, {
        title: 'Second account',
        balance: 0,
        currency: 'EUR',
        id: 1
      }
    ])  
})

  it("should handle DELETE_ACCOUNT", () => {
    expect(
      accountsReducer(
        [
          {
            title: "First account",
            balance: 8,
            currency: "BGN",
            id: 0
          },
          {
            title: "Second account",
            balance: 9,
            currency: "EUR",
            id: 1
          }
        ],
        {
          type: "DELETE_BANK_ACCOUNT",
          id: 1
        }
      )
    ).toEqual([
      {
        title: "First account",
        balance: 8,
        currency: "BGN",
        id: 0
      }
    ]);
  });
});
