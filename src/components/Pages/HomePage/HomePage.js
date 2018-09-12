import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import MockAdapter from 'axios-mock-adapter'
import { BrowserRouter, Redirect } from 'react-router-dom';
import Menu from "../../Menus/Menu/Menu";
//import styles from "./styles.js";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"
import { store } from '../../../index'
import { checkAuth } from "../../../reducers/auth";
import "./styles.css"


var mock = new MockAdapter(axios);

export const client = axios.create({
    baseURL:'/login'
});

mock.onPost('/login').reply((response) => {
    const data = JSON.parse(response.data)
        if(data.username === 'admin' && data.password === 'admin') {
          return ([200, { message: console.log('hi') } ]);
        } else {
          return([500, { success: false } ]);
        }
}); 


const HomePage = ({ dispatch, history }) => {
    let username; 
    let password;

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
                <form className="homePage__form">
                        <Label text="User:" className="form__label" />
                        <RequiredField />
                        <input type="text" ref={node => (username = node)} className="form__input"/>
                        <Label text="Password:" />
                        <RequiredField />
                        <input type="password" ref={node => (password = node)}  className="form__input"/>
                        <PrimaryButton btnValue="Sign in" 
                            onClick={() => {
                                dispatch(checkAuth(username.value, password.value))
                                axios
                                    .post('/login', {username: username.value, password: password.value})
                                    .then(() => {
                                        history.push('/accounts')
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                    })
                            }}/>
                            
                </form>
                
            </div>
        </div>
    )
  
};

export default connect()(HomePage);
