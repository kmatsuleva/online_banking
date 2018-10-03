import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import CreateAccount from "./AccountsComponents/CreateAccount/CreateAccount";


class AccountsPage extends React.Component {
    
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
                        if (!title) {
                            alert ('Please fill in the account name field')
                        } else if (!title.match(/^[BG]*[0-9]{2}[BUIN]*[0-9]{14}$/)) {
                            alert ('Incorrect account name format')
                        } 
                        else {
                           this.props.createAccount(title, balance, currency)
                        }
                    }}
                    />
                    
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
 