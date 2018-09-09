import React from "react";
import { connect } from "react-redux";
import { createAccount } from "../../../../../reducers/accounts";
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"
import Label from "../../../../Common/Label/Label";
import DropDownItem from "../../../../Common/DropdownItem/DropdownItem";
import styles from "./styles"

const currency = ["BGN", "USD", "EUR"];

const CreateAccount = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(createAccount(input.value));
          input.value = "";
        }}
      >
        <Label text="Account:" style={labelStyles} />
        <input type="text" ref={node => (input = node)} style={styles.input} />
        <Label text="Currency:" style={labelStyles}/>
        <DropDownItem value = {currency}/>
        <span style={styles.button}>
          <PrimaryButton btnValue="Create" />
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

