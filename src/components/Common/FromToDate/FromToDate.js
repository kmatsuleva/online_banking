import React from "react";
import Label from "../Label/Label"  
import InputTypeDate from "../InputTypeDate/InputTypeDate" 


const FromToDate = () => (
        <form >
                <Label text = "From:" style={labelStyles}/>
                <InputTypeDate min="2018-01-01" max="2022-08-09"/>
                <Label text ="To: " style={labelStyles}/>
                <InputTypeDate min="2018-01-01" max="2022-08-09"/>
        </form>
);

const labelStyles = {
        fontSize: 18,
        color: "#15517d",
        fontFamily: "Roboto, Arial, sans-serif",
        marginBottom: 8,
        padding: "0 30px"
};


export default FromToDate;     


