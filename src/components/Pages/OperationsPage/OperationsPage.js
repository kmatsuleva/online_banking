import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import styles from "./styles"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText"

const operation = ["Debosit", "Withdrawal"];
const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];


const OperationsPage = () => (
    <div>
        <OnlineBankingMenu />
        <div style={styles.wrapper}>
            <div style={styles.operations}>
            <div style={styles.container}>
                <Label text="Account:" />
                <DropDownItem items={accounts} />
            </div>
                <div style={styles.container}>
                    <Label text="Balance:" />
                    <InputTypeText style={styles.input} disabled/>
                </div>
                <div style={styles.container}>
                    <Label text="Operation: " />
                    <DropDownItem items={operation}/>
                </div>
                <div style={styles.container}>
                    <Label text="Enter the amount:" />
                    <InputTypeText placeholder="e.g 500" style={inputStyles}/>
                </div>
                <div style={styles.button}>
                    <PrimaryButton btnValue = "Execute"/>
                </div>
            </div>
        </div>
    </div>
);


const inputStyles = {
    border: "1px solid #d2d2d2",
    padding: "8px 10px",
    marginTop: 8,
    marginBottom: 25,
    borderRadius: 3,
    height: 14,
    fontSize: 15,
    color: "#4a4a4a",
    boxShadow: "inset 1px 1px 2px rgba(0, 0, 0, 0.2)",
    width: 100
}

export default OperationsPage;
 