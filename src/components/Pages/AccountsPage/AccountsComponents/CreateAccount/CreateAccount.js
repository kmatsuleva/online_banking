import React from "react";
import { connect } from "react-redux";
import { createAccount } from "../../../../../reducers/bank_accounts";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import Label from "../../../../Common/Label/Label";
import styles from "./styles"

const CreateAccount = ({ dispatch }) => {
  let account;
  let option;

  return (
    <div>
      <form>
        <Label text="Account:" style={labelStyles} />
        <input type="text" ref={node => (account = node)} style={styles.input} />
        <Label text="Currency:" style={labelStyles}/>
        
        <select ref={node => (option = node)} style={styles.currency}>
          <option>BGN</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <span style={styles.button}>
          <PrimaryButton
            btnValue="Create"
            onClick={e => {
            e.preventDefault();
            if (!account.value.trim()) {
              return;
            }
            dispatch(createAccount(account.value, option.value));
            account.value = "";
          }}/>
        </span>

      </form>
    </div>
  );
};


const labelStyles = {
    fontSize: 18,
    color: "#15517d",
    fontFamily: "Roboto, Arial, sans-serif",
    marginBottom: 8,
    padding: "0 30px"
};

export default connect()(CreateAccount);

