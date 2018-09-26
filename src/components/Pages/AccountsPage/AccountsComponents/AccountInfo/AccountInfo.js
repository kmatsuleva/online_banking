import React from "react"
import PropTypes from 'prop-types'
import "./styles.css"


const AccountInfo = ({ title, balance, currency, onClick }) => (
    <div className="accountsList">
        <div className="wrapper">
            <div className = "account">{ title }</div>
            <div className = "balance"> {balance} {currency} </div>
            <div className = "icon_delete">
                <button className = "button" onClick={onClick}> 
                    <img 
                        src={require('../../../../../icons/delete.png')}
                        alt = "delete" />
                </button>
            </div>
        </div>
    </div>
);



AccountInfo.propTypes = {
    title: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

  
export default AccountInfo;


