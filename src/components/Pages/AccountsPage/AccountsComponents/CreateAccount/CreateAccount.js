import React from "react";
import { connect } from "react-redux";
import { createAccount } from "../../../../../reducers/accounts";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import Label from "../../../../Common/Label/Label";
import styles from "./styles"

const CreateAccount = ({ dispatch }) => {
  let input;
  let option;

  return (
    <div>
      <form>
        <Label text="Account:" style={labelStyles} />
        <input type="text" ref={node => (input = node)} style={styles.input} />
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
            if (!input.value.trim()) {
              return;
            }
            dispatch(createAccount(input.value, option.value));
            input.value = "";
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

