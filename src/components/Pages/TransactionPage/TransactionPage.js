import React from "react";
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import FromToDate from '../../Common/FromToDate/FromToDate'
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import styles from "./styles.js"
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import TableHeader from "../../Common/TableHeader/TableHeader"
import TableData from "../../Common/TableData/TableData"

const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];
const operation = ["All", "Debosit", "Withdrawal"];
const headers = [ "date and time", "account", "operation", "amount"];
const items = ["test1", "test2", "test3", "test4"];

const TransactionPage = () => (
    <div>
        <OnlineBankingMenu />
            <div style={styles.container}>
                <label style={styles.label}>Account:</label>
                <DropDownItem items={accounts} />
                <FromToDate min="2018-01-01" max="2022-01-01"/>
                <label style={styles.label}>Operation:</label>
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

export default TransactionPage;
 