import React from "react";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import Label from "../../../../Common/Label/Label";
import "./styles.css"
import AccountInfo from '../AccountInfo/AccountInfo'

class CreateAccount extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        bankAccount: '',
        balance: '',
        currency: 'BGN'
      };
  }
  
  render() {

      return (
        <div>
        <form className="createForm">
            <Label text="Account:" className="label" />
            <input type="text" value={this.state.bankAccount} onChange={(e) => this.setState({bankAccount: e.target.value})} className="input"/>
            <Label text="Balance:" className="label" />
            <input type="text" value={this.state.balance} onChange={(e) => this.setState({balance: e.target.value})}  className="input__balance" placeholder="e.g 500"/>
            <Label text="Currency:" className="label"/>
        
            <select value={this.state.currency} onChange={(e) => this.setState({currency: e.target.value})}>
                <option value="BGN">BGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>

            <span className="button">
              <PrimaryButton
                value="Create"
                onClick={e => {
                    e.preventDefault();
                    this.props.createAccount(this.state.bankAccount, this.state.balance, this.state.currency);
                   }}
              />
            </span>
          </form>

           <div>
            {this.props.accounts &&this.props.accounts.map(account =>
              <AccountInfo
                {...account}
                onClick={() => this.props.deleteAccount(account.id)}
              />
            )}
          </div>
        </div>
        );
    }
};

export default CreateAccount;