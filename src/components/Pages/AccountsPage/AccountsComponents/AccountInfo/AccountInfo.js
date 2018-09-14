import React from "react"
import PropTypes from 'prop-types'
import styles from "./styles";


const AccountInfo = ({ title, balance, currency, onClick }) => (
    <div style={styles.accountsList}>
        <div style={styles.wrapper}>
            <div style={styles.account}>{ title }</div>
            <div style={styles.balance}> {balance} {currency} </div>
            <div style={styles.icon_delete}>
                <button style={styles.button} onClick={onClick}> 
                    <img 
                        src={require('../../../../../icons/delete.png')}
                        alt = "delete" />
                </button>
            </div>
        </div>
    </div>
);



AccountInfo.propTypes = {
    title: PropTypes.string.isRequired
}

  
export default AccountInfo;


