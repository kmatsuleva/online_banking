import React from "react";
import AccountInfo from "./../AccountInfo/AccountInfo";
import PropTypes from 'prop-types';  

const AccountsList = ({ accounts , deleteAccount }) => (
  <div>
    {accounts.map(account =>
      <AccountInfo
        {...account}
        onClick={() => deleteAccount(account.id)}
      />
    )}
  </div>
);


AccountsList.propTypes = {
  accounts: PropTypes.node.isRequired    
};


export default AccountsList;
