import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import CreateAccount from "./AccountsComponents/CreateAccount/CreateAccount";


const currency = ["BGN", "USD", "EUR"];

const AccountsPage = () => (
    <div>
        <OnlineBankingMenu />
        <form style={styles.container}>
            <CreateAccount />
        </form> 
    </div>
);

export default AccountsPage;
 