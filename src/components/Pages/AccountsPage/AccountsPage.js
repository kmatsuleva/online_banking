import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AllAccountsList from "./AccountsComponents/AllAccountsList/AllAccountsList";
import styles from "./styles"
import AddNewAccount from "./AccountsComponents/AddNewAccount/AddNewAccount"

const AccountsPage = () => (
    <div>
        <OnlineBankingMenu />
        <AddNewAccount />
            <div style={styles.allAccounts} >
                <AllAccountsList />
            </div>
    </div>
);


export default AccountsPage;
 