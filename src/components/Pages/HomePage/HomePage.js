import React from "react";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { connect } from "react-redux";
import { BrowserRouter, Redirect } from 'react-router-dom';
import Menu from "../../Menus/Menu/Menu";
import styles from "./styles.js";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"
import { store } from '../../../index'

var mock = new MockAdapter(axios);

mock.onPost('/login').reply((response) => {
    const data = JSON.parse(response.data)
        if(data.username === 'admin' && data.password === 'admin') {
          return ([200, { message: console.log('hi') } ]);
        } else {
          return([500, { success: false } ]);
        }
}); 


const HomePage = () => {
    let username; 
    let password;

    // const redirect = () => {
        // if (!store.getState().auth.loggedIn) {
        //     return (
        //         <BrowserRouter> 
        //             <Redirect to="/accounts" /> 
        //         </BrowserRouter> 
        //     )
        // }
    // }

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
                        <input type="text" ref={node => (username = node)} style={styles.input}/>
                        <Label text="Password:" />
                        <RequiredField />
                        <input type="password" ref={node => (password = node)}  style={styles.input}/>
                        <PrimaryButton btnValue="Sign in" 
                            onClick={() => {
                                axios.post('/login', {username: username.value, password: password.value})
                                .then((response) => {
                                    console.log(response);
                                    //redirect()
                                })
                                .catch((error) => {
                                    console.log(error)
                                });

                                //redirect()
                            }}/>
                            
                </div>
            </div>
        </div>
    )
  
};

export default connect()(HomePage);
