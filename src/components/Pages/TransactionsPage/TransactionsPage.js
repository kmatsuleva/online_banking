import React from "react";
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import SelectTransactionForm from "./TransactionComponents/SelectTransactionForm/SelectTransactionForm";
import TransactionInfo from "./TransactionComponents/TransactionInfo/TransactionInfo";
import "./styles.css"

const TransactionsPage = ({ transactions, viewAllTransactions }) => (
    <div>
        <OnlineBankingMenu />
        <SelectTransactionForm onClick={ () => viewAllTransactions() }/>
        <div className="tableWrapper">
            {/* {transactions.map(transaction => */}
                <TransactionInfo 
                    // date = { transaction.date }
                    // account = { transaction.date }
                    // operation = { transaction.date }
                    // amount = { transaction.amount }
                    // {...transaction}
                />
            {/* )} */}
        </div>
    </div>
);

export default TransactionsPage;
 