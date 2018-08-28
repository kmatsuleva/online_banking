import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AllAccounts from "./AccountsComponents/AllAccounts/AllAccounts";
import styles from "./styles"
import AddNewAccount from "./AccountsComponents/AddNewAccount/AddNewAccount"

const Accounts = () => (
    <div>
        <OnlineBankingMenu />
        <AddNewAccount />
            <div style={styles.allAccounts} >
                <AllAccounts />
            </div>
    </div>
);


export default Accounts;
 