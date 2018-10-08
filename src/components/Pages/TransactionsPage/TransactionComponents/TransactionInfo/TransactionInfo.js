import React from "react";
import TableHeader from "../../../../Common/TableHeader/TableHeader"
import PropTypes from 'prop-types'
import "./styles.css"

const headers = [ "date and time", "account", "operation", "amount"];
 
const TransactionInfo = ({ date, account, operation, amount }) => (
        <table className="table">
            <TableHeader items = { headers } className="column" />
            <div className="tableItems">
                <div className = "item"> { date } </div>
                <div className = "item"> { account } </div>
                <div className = "item"> { operation } </div>
                <div className = "item"> { amount } </div>
            </div>
        </table>
);


TransactionInfo.propTypes = {
    data: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}


export default TransactionInfo;