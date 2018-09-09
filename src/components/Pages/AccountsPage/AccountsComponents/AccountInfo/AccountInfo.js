import React from "react"
import styles from "./styles";

const AccountInfo = ({ title }) => (
    <div style={styles.accountsList}>
        <div style={styles.wrapper}>
            <div style={styles.account}>{ title }</div>
            <div style={styles.balance}>568 BGN</div>
            <div style={styles.icon_delete}>
            <button style={styles.button}>
                <img 
                    src={require('../../../../../icons/delete.png')}
                    alt = "detele" />
            </button>
            </div>
        </div>
    </div>
);

export default AccountInfo;


