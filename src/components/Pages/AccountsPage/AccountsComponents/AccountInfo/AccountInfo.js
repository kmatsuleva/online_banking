import React from "react"
import PropTypes from 'prop-types'
import styles from "./styles";

const AccountInfo = ({ title, currency }) => (
    <div style={styles.accountsList}>
        <div style={styles.wrapper}>
            <div style={styles.account}>{ title }</div>
            <div style={styles.balance}> 0 {currency} </div>
            <div style={styles.icon_delete}>
                <button style={styles.button}> 
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


