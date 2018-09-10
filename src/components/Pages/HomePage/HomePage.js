import React from "react";
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Menu from "../../Menus/Menu/Menu";
import styles from "./styles.js";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText";
import InputTypePassword from "../../Common/InputTypePassword/InputTypePassword";

var mock = new MockAdapter(axios);

    mock.onPost('/accounts').reply(200, {
        users: [
          { username: 'admin', password: 'admin'}
        ]
      });
      

const HomePage = () => {
    let user; 
    let password;

    return (
        <div>
            <Menu />
            <div style={styles.flexBoxContainer}>
                <div style={styles.homePageImg}>
                    <img 
                        src={require('../../../../src/images/home-page-img.jpg')} 
                        alt = "home_image"
                        style={styles.img}
                    />
                </div>
                <div style={styles.form}>
                        <Label text="User:" />
                        <RequiredField />
                        <InputTypeText ref={node => (user = node)} />
                        <Label text="Password:" />
                        <RequiredField />
                        <InputTypePassword ref={node => (password = node)}/>
                        <PrimaryButton btnValue="Sign in" 
                            onClick={e => {
                                e.preventDefault();
                                if (!user.value.trim() || !password.value.trim() ) {
                                    return;
                                }
                                dispatch(checkAuth(user.value, password.value));
                            }}/>
                            />
                </div>
            </div>
        </div>
    )
  
};

export default HomePage;
