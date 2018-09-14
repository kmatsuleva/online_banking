import * as actions from "./bank_accounts";
import accountsReducer from "./bank_accounts";

describe("accounts actions", () => {
  it("createAccount should create CREATE_BANK_ACCOUNT action", () => {
    expect(actions.createAccount("First account", "BGN")).toEqual({
      type: "CREATE_BANK_ACCOUNT",
      id: 0,
      title: "First account",
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
          currency: 'USD',
          id: 0
        }
      ], {
          type: 'CREATE_BANK_ACCOUNT',
          title: 'Second account',
          currency: 'EUR',
          id: 1
        })
    ).toEqual([
      {
        title: 'First account',
        currency: 'USD',
        id: 0
      }, {
        title: 'Second account',
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
            currency: "BGN",
            id: 0
          },
          {
            title: "Second account",
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
        currency: "BGN",
        id: 0
      }
    ]);
  });
});
