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

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { bankAccount, balance, currency }  = this.state;
    this.props.createAccount(bankAccount, balance, currency)
    
}
  
  render() {

      return (
        <div>
          <div className="form">
           <form className="createForm">
              <div className="title">
                <Label text="Account:" className="label" />
                <input type="text" value={this.state.bankAccount} onChange={(e) => this.setState({bankAccount: e.target.value})} className="input"/>
              </div>
              <div className="balance">
                <Label text="Balance:" className="label" />
                <input type="text" value={this.state.balance} onChange={(e) => this.setState({balance: e.target.value})}  className="input__balance" placeholder="e.g 500"/>
              </div>
              

              <div className="balance">
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

            <div>
              {this.props.accounts && this.props.accounts.map(account =>
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