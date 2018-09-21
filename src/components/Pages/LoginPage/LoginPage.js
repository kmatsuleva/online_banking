import React from "react";
import Menu from "../../Menus/Menu/Menu";
import history from '../../../history';
import "./styles.css"
import LoginFormContainer from "../../../containers/LoginFormContainer";


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
                <LoginFormContainer />
            </div>
        </div>
    )
  
};

export default LoginPage;