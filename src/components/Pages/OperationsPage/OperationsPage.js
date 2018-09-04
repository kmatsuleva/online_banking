import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import DropDownItem from "../../Common/DropdownItem/DropdownItem"

const operation = ["Debosit", "Withdrawal"];
const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];

const OperationsPage = () => (
    <div>
        <OnlineBankingMenu />
        <div style={styles.wrapper}>
            <div style={styles.operations}>
            <div style={styles.container}>
                <label style={styles.label}>Account:</label>
                <DropDownItem items={accounts} />
            </div>
                <div style={styles.container}>
                    <label style={styles.label}>Balance:</label>
                    <input type="text" style={styles.input} disabled/>
                </div>
                <div style={styles.container}>
                    <label style={styles.label}>Operation: </label>
                    <DropDownItem items={operation}/>
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
 