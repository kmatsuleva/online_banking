import React from "react";
import OnlineBankingMenu from "../OnlineBankingMenu/OnlineBankingMenu";
import AccountsLabelDropdown from "../AccountsLabelDropdown/AccountsLabelDropdown"
import Label from "../Label/Label";
import Input from "../Input/Input";
import OperationsListDropdown from "../OperationsListDropdown/OperationsListDropdown"
import styles from "./styles"
import Button from "../Button/Button"


const OperationsPage = () => (
    <div>
        <OnlineBankingMenu />
        <div style={styles.wrapper}>
            <div>
                <AccountsLabelDropdown />
                <div style={styles.container}>
                    <Label labelValue = "Balance:" style={styles.label} />
                    <Input style={styles.input} disabled="disabled"/>
                </div>
                <div style={styles.container}>
                    <Label labelValue = "Operation:" style={styles.label} />
                    <OperationsListDropdown />
                </div>
                <div style={styles.container}>
                    <Label labelValue = "Enter the amount:" style={styles.label} />
                    <Input style={styles.input} placeholder="e.g 500"/>
                </div>
                <div style={styles.button}>
                    <Button btnValue = "Execute"/>
                </div>
            </div>
        </div>
    </div>
);


export default OperationsPage;
 