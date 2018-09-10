import React from "react";
import AccountInfo from "./../AccountInfo/AccountInfo";
import PropTypes from 'prop-types';  

const AccountsList = ({ accounts=[] }) => (
  <div>{accounts.map(account => <AccountInfo {...account}  />)}</div>
);


AccountsList.propTypes = {
  accounts: PropTypes.node.isRequired    
};


export default AccountsList;
