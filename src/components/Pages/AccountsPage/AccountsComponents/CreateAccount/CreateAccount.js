import React from "react";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import "./styles.css"

class CreateAccount extends React.Component {
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
      const { title, balance, currency}  = this.state;
      this.props.createAccount(title, balance, currency)
      this.setState({
        title: '',
        balance: ''
      });
  }

  
  render() {

      return (
        <div>
            <div className="form">
                <form className="form__createForm">
                    <div className="createForm__title">
                        <label className="createForm__label"> Account:  </label>
                        <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} className="createForm__input-text"/>
                    </div>
                    
                    <div className = "balance_currency">
                        <label className="createForm__label"> Balance: </label>
                        <input type="number" 
                                value={this.state.balance} 
                                onChange={(e) => this.setState({balance: e.target.value})} 
                                placeholder="e.g 500" 
                                className="createForm__input-balance" 
                        />
                
                        <label className="createForm__label"> Currency: </label>
                        <select value={this.state.currency} onChange={(e) => this.setState({currency: e.target.value})} className="dropdown">
                            <option value="BGN">BGN</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>

                    <div className = "button">
                        <PrimaryButton
                            value="Create"
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
      );
    
  }
};

export default CreateAccount;