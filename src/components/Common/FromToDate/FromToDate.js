import React from "react";
import Label from "../Label/Label"  
import InputTypeDate from "../InputTypeDate/InputTypeDate" 


const FromToDate = ({min, max, className}) => (
        <form >
                <Label text = "From:" className={className}/>
                <InputTypeDate min={min} max={max}/>
        </form>
);

export default FromToDate;     


