import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText"


const currency = ["BGN", "USD", "EUR"];

const labelStyles = {
    fontSize: 18,
    color: "#15517d",
    fontFamily: "Roboto, Arial, sans-serif",
    marginBottom: 8,
    padding: "0 30px"
};

const AccountsPage = () => (
    <div>
        <OnlineBankingMenu />
        <form style={styles.container}>
            <Label text = "Account:" style={labelStyles}/>
            <InputTypeText />
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


export default AccountsPage;
 