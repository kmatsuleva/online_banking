import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import CreateAccount from "./AccountsComponents/CreateAccount/CreateAccount";
import Label from "../../Common/Label/Label"
import PrimaryButton from '../../Common/PrimaryButton/PrimaryButton'


class AccountsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            balance: '',
            currency: 'BGN'
          };
  
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit() {
      const { title, balance, currency}  = this.state
      this.props.createAccount(title, balance, currency)
      
  }
    
    componentDidMount(){
        this.props.getAllAccounts();
    }

    render() {
      return (
        <div >
            <OnlineBankingMenu />
            <div>
                <div>
                    <div className="form">
                    <form className="createForm">
                        <div className="title">
                            <Label text="Account:" className="label" />
                            <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} className="input"/>
                        </div>
                        
                        <div className = "balance_currency">
                            <Label text="Balance:" className="label" />
                            <input type="text" value={this.state.balance} onChange={(e) => this.setState({balance: e.target.value})}  className="input__balance" placeholder="e.g 500"/>
                    
                            <Label text="Currency:" className="label"/>
                            <select value={this.state.currency} onChange={(e) => this.setState({currency: e.target.value})} className="dropdown">
                                <option value="BGN">BGN</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>

                            <PrimaryButton
                                value="Create"
                                onClick={this.handleSubmit}
                                className = "button"
                            />
                        </form>
                        </div>
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
    )}};

export default AccountsPage;
 