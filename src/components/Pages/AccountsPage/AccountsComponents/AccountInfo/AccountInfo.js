import React from "react"
import styles from "./styles";

const AllAccounts = () => (
    <div style={styles.wrapper}>
        <div style={styles.wrapper1}>
        <img 
                src={require('../../../../../icons/money.png')}
                alt = "money" />
        </div>
        <div style={styles.wrapper2}>568 BGN</div>
        <div style={styles.wrapper3}>BG56BUIN65431544786321</div>

        <div style={styles.wrapper4}>
            <img 
                src={require('../../../../../icons/delete.png')}
                alt = "detele" />
        </div>
  </div>
);

export default AllAccounts;


