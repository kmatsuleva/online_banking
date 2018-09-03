import React from "react"
import styles from "./styles";

const AccountInfo = () => (
    <div style={styles.wrapper}>
        <div style={styles.account}>BG56BUIN65431544786321</div>
        <div style={styles.balance}>568 BGN</div>
        <div style={styles.icon_delete}>
        <button style={styles.button}>
            <img 
                src={require('../../../../../icons/delete.png')}
                alt = "detele" />
        </button>
        </div>
  </div>
);

export default AccountInfo;


