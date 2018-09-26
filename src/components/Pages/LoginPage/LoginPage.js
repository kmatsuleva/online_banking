import React from "react";
import Menu from "../../Menus/Menu/Menu";
import AsyncValidationForm from "./LoginComponents/AsyncValidationForm/AsyncValidationForm";
import checkInputs from "../../../formValidation/asyncValidate"
import "./styles.css"


const LoginPage = () => {

    return (
        <div>
            <Menu />
            <div className="container__homePage">
                <div className="homePage__imgContainer">
                    <img 
                        src={require('../../../../src/images/home-page-img.jpg')} 
                        alt = "home_image"
                        className = "img homePage__img"
                    />
                </div>
                <div className="login">
                    <AsyncValidationForm onSubmit={checkInputs} />
                </div>
            </div>
        </div>
    )
  
};

export default LoginPage;