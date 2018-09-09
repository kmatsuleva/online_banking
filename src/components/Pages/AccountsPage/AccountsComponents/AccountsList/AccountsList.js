import React from "react";
import AccountInfo from "./../AccountInfo/AccountInfo";

const AccountsList = ({ accounts }) => (
  <div>{accounts.map(account => <AccountInfo {...account} />)}</div>
);

export default AccountsList;
