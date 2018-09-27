import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import CreateAccount from "./AccountsComponents/CreateAccount/CreateAccount";

class AccountsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          bankAccount: '',
          balance: '',
          currency: 'BGN'
        };
  
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit() {
      const { bankAccount, balance, currency }  = this.state;
      this.props.createAccount(bankAccount, balance, currency)
      
  }
    
    componentDidMount(){
        this.props.getAllAccounts();
    }

    render() {
      return (
        <div >
            <OnlineBankingMenu />
            <div>
                <CreateAccount onClick={this.handleSubmit} />
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
    )}};

export default AccountsPage;
 