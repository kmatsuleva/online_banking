import React from "react";
import Menu from "../../Menus/Menu/Menu";
import AsyncValidationForm from "./LoginComponents/AsyncValidationForm/AsyncValidationForm";
import checkInputs from "./LoginComponents/AsyncValidationForm/asyncValidate"
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
                <div style={{ padding: 15 }}>
                    <AsyncValidationForm onSubmit={checkInputs} />
                </div>
            </div>
        </div>
    )
  
};

export default LoginPage;