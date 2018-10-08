import React from "react";
import FromToDate from '../../../../Common/FromToDate/FromToDate'
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton";
import DropDownItem from "../../../../Common/DropdownItem/DropdownItem"
import Label from "../../../../Common/Label/Label"
import "./styles.css"

const accounts = ["BG56BUIN65431544786321", "BG56BUIN64563424786321", "BG56BUIN65412345686321"];
const operation = ["All", "Debosit", "Withdrawal"];

const SelectTransactionForm = ({ onClick }) => (
    <div className="container">
        <div>
            <Label text="Account:" className="labelStyles"/>
            <DropDownItem items={accounts} className="dropdownOperations"/>
        </div>
        <div>
            <FromToDate min="2018-01-01" max="2022-01-01" className="labelStyles"/>
        </div>
        <FromToDate min="2018-01-01" max="2022-01-01" className="labelStyles"/>
        <div>
            <Label text="Operation:" className="labelStyles"/>
            <DropDownItem items={operation} className="dropdownOperations"/>
        </div>
        <div className="button">
            <PrimaryButton value = "Show" 
                onClick = { onClick }
                className = "buttonShow"
            />
        </div>
    </div>
);

export default SelectTransactionForm;
 