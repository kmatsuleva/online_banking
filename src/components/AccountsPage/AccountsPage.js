import React from "react";
import OnlineBankingMenu from "../OnlineBankingMenu/OnlineBankingMenu";
import AllAccounts from "../AllAccounts/AllAccounts";
import styles from "./styles"
import AddNewAccount from "../AddNewAccount/AddNewAccount"

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
 