import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountsLabelDropdown from "../../Common/AccountsLabelDropdown/AccountsLabelDropdown"
import OperationsListDropdown from "./OperationsComponents/OperationsListDropdown/OperationsListDropdown"
import styles from "./styles"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"


const OperationsPage = () => (
    <div>
        <OnlineBankingMenu />
        <div style={styles.wrapper}>
            <div style={styles.operations}>
                <AccountsLabelDropdown />
                <div style={styles.container}>
                    <label style={styles.label}>Balance:</label>
                    <input type="text" style={styles.input} disabled/>
                </div>
                <div style={styles.container}>
                    <label style={styles.label}>Operation: </label>
                    <OperationsListDropdown />
                </div>
                <div style={styles.container}>
                    <label style={styles.label}>Enter the amount: </label>
                    <input type="text" style={styles.input} placeholder="e.g 500"/>
                </div>
                <div style={styles.button}>
                    <PrimaryButton btnValue = "Execute"/>
                </div>
            </div>
        </div>
    </div>
);


export default OperationsPage;
 