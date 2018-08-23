import React from "react";
import DropDownItem from "../DropdownItem/DropdownItem";

const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];

const DropdownAccounts = () => (
  <div>
    <DropDownItem items={accounts} />
  </div>
);

export default DropdownAccounts;
