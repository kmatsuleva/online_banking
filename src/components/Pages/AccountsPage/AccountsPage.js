import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText"


const currency = ["BGN", "USD", "EUR"];

const AccountsPage = () => (
    <div>
        <OnlineBankingMenu />
        <form style={styles.container}>
            <Label text = "Account:" style={labelStyles}/>
            <InputTypeText style={input}/>
            <Label text = "Currency:" style={labelStyles}/>
            <DropDownItem items={currency} />
            <div style={styles.button}>
                <PrimaryButton btnValue = "Create"/>
            </div>
        </form> 
            <div style={styles.accountsList} >
                <AccountInfo />
            </div>
    </div>
);


const labelStyles = {
    fontSize: 18,
    color: "#15517d",
    fontFamily: "Roboto, Arial, sans-serif",
    marginBottom: 8,
    padding: "0 30px"
};

const input =  {
    border: "1px solid #d2d2d2",
    padding: "8px 10px",
    marginTop: 8,
    marginBottom: 25,
    borderRadius: 3,
    height: 23,
    fontSize: 18,
    color: "#4a4a4a",
    boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
    width: "260px"
};



export default AccountsPage;
 