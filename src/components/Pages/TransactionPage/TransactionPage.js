import React from "react";
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import FromToDate from '../../Common/FromToDate/FromToDate'
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import TableHeader from "../../Common/TableHeader/TableHeader"
import TableData from "../../Common/TableData/TableData"
import Label from "../../Common/Label/Label"
import styles from "./styles.js"

const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];
const operation = ["All", "Debosit", "Withdrawal"];
const headers = [ "date and time", "account", "operation", "amount"];
const items = ["test1", "test2", "test3", "test4"];


const TransactionPage = () => (
    <div>
        <OnlineBankingMenu />
            <div style={styles.container}>
                <Label text="Account:" style = {labelStyles}/>
                <DropDownItem items={accounts} />
                <FromToDate/>
                <Label text="Operation:" style = {labelStyles}/>
                <DropDownItem items={operation}/>
                <div style={styles.button}>
                    <PrimaryButton btnValue = "Show" />
                </div>
            </div>
            <div style={styles.wrapper}>
                <table style={styles.table}>
                    <TableHeader items = {headers} style = {styles.item}/>
                    <TableData items = {items} style = {styles.item}/>
                </table>
            </div>
    </div>
);


const labelStyles = {
    fontSize: 18,
    color: "#15517d",
    fontFamily: "Roboto, Arial, sans-serif",
    marginBottom: 8,
    padding: "0 30px"
};

export default TransactionPage;
 