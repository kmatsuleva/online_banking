import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import CreateAccount from "./AccountsComponents/CreateAccount/CreateAccount";
import ResultMessage from "../../Common/ResultMessage/ResultMessage"
import "./styles.css"

class AccountsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          errorMessage_empty: false,
          errorMessage_incorrect: false,
          successMessage: false,
          cashBalance: false
        }
    }

    componentDidMount() {
        this.props.getAllAccounts();
    }

    render() {
      return (
        <div >
            <OnlineBankingMenu />
            <div>
                <div>
                    <CreateAccount createAccount = {(title, balance, currency) => {
                        let cashBalance = parseFloat(balance);
                        let cash = cashBalance.toFixed(2);
                        if (!title || !cashBalance) {
                            this.setState({ errorMessage_empty: true })
                            this.setState({ errorMessage_incorrect: false })
                            this.setState({ successMessage: false })
                            this.setState({ cashBalance: false })
                        } else if (!title.match(/^[BG]*[0-9]{2}[BUIN]*[0-9]{14}$/)) {
                            this.setState({ errorMessage_empty: false })
                            this.setState({ errorMessage_incorrect: true })
                            this.setState({ successMessage: false })
                            this.setState({ cashBalance: false })
                        } else if ((currency === "BGN" && cashBalance > 1000) || (currency === "USD" && cashBalance > 587) || (currency === "EUR" && cashBalance > 511)) {
                            this.setState({ errorMessage_empty: false })
                            this.setState({ errorMessage_incorrect: false })
                            this.setState({ successMessage: false })
                            this.setState({ cashBalance: true })
                        } else {
                           this.props.createAccount(title, cash, currency)
                           this.setState({ errorMessage_empty: false })
                           this.setState({ errorMessage_incorrect: false })
                           this.setState({ successMessage: true })
                           this.setState({ cashBalance: false })
                        }
                    }}
                    />
                     {this.state.errorMessage_empty && < ResultMessage message = 'Account and balance fields must be filled' className = "errorMessage_empty"/>}
                     {this.state.errorMessage_incorrect && < ResultMessage message = 'Incorrect account name format' className = "errorMessage_incorrect" />}
                     {this.state.cashBalance && < ResultMessage message = 'The initial amount must not exceed 1000 BGN, 587 USD, 511 EUR' className = "errorMessage_incorrect" />}
                     {this.state.successMessage && < ResultMessage message = 'Account successfully created' className = "successMessage" />}
                </div>

                <div>
                    {this.props.accounts && this.props.accounts.map(account =>
                        <AccountInfo
                            {...account}
                            onClick={() => this.props.deleteAccount(account.id)}
                        />
                    )}
                </div>
            </div> 
        </div>
        )
    }
};

export default AccountsPage;
 