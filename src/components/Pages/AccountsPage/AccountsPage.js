import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"


const currency = ["BGN", "USD", "EUR"];

const AccountsPage = () => (
    <div>
        <OnlineBankingMenu />
        <form style={styles.container}>
            <label style={styles.label}>Account: </label>
            <input type="text" style={styles.input} />
            <label style={styles.label}>Currency: </label>
            <DropDownItem items={currency} />
            <div style={styles.button}>
                <PrimaryButton btnValue = "Create"  />
            </div>
        </form> 
            <div style={styles.accountsList} >
                <AccountInfo />
            </div>
    </div>
);


export default AccountsPage;
 