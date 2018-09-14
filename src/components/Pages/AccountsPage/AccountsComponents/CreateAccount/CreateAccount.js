import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { createAccount } from "../../../../../reducers/bank_accounts";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import Label from "../../../../Common/Label/Label";
import "./styles.css"
import fake_database from "../../../../../reducers/fake_database"

var mock = new MockAdapter(axios);

export const client = axios.create({
    baseURL:'/'
});

mock.onGet('/accounts').reply(200, {
  fake_database: [
    { title, balance, currency }
  ]
});

mock.onPost('/accounts').reply((response) => {
  console.log('hi')
    const data = JSON.parse(response.data)
    if(data.title.match(/^[BG]*[0-9]{2}[BUIN]*[0-9]{14}$/)) {
        return ([200, { message: console.log('hi') } ]);
    } else {
        return([500, { success: false } ]);
    }
}); 



const CreateAccount = ({ dispatch }) => {
  let account;
  let balance;
  let currency;

  return (
    <div>
      <form>
        <Label text="Account:" className="label" />
        <input type="text" ref={node => (account = node)} className="input" />
        <Label text="Balance:" className="label" />
        <input type="text" ref={node => (balance = node)} className="input__balance" placeholder="e.g 500"/>
        <Label text="Currency:" className="label"/>
        
        <select ref={node => (currency = node)} className="currency">
          <option>BGN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <span className="button">
          <PrimaryButton
            btnValue="Create"
            onClick={e => {
            e.preventDefault();
            if(!account.value.match(/^[BG]*[0-9]{2}[BUIN]*[0-9]{14}$/) || !balance.value || !parseFloat(balance.value)) {
              return;
            }
            dispatch(createAccount(account.value, balance.value, currency.value));
            account.value = "";
            balance.value = "";
            axios
              .get('/accounts')
              .then(function(response) {
                console.log(response.data)
              })
              .catch((error) => {
                  console.log(error)
              });

            axios
              .post('/accounts', {params: {title: account.value, balance: balance.value, currency: currency.value}})
              .then(() => {
                  console.log('fhvjdhbc dhjsvcjhdhv')
              })
              .catch((error) => {
                  console.log(error)
              })
          }}/>
        </span>

      </form>
    </div>
  );
};

export default connect()(CreateAccount);

