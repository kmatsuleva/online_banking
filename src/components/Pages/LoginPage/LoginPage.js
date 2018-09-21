import React from "react";
import Menu from "../../Menus/Menu/Menu";
import LoginForm from './LoginComponents/LoginForm/LoginForm'
import history from '../../../history';
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
                <LoginForm onLogin={(username, password) => {
                    if(username === 'admin' && password === 'admin') {
                        console.log('tratata')}
                    }}
                />
            </div>
        </div>
    )
  
};

export default LoginPage;