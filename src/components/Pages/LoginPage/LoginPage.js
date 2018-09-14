import React from "react";
import { connect } from "react-redux";
import Menu from "../../Menus/Menu/Menu";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"
import { checkAuth } from "../../../reducers/auth";
import "./styles.css"


class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = () => {
        const { username, password}  = this.state

        this.props.onLogin(username, password)
    }
    render() {

        return <form className="homePage__form">
                <Label text="User:" className="form__label" />
                <RequiredField />
                <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className="form__input"/>
                <Label text="Password:" />
                <RequiredField />
                <input type="text" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className="form__input"/>
                <input type="button" onClick={this.handleSubmit} />
        </form>
            
    }
}

const LoginPage = ({ dispatch, history }) => {

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
                <LoginForm onLogin={(username, password) => console.log(username,password)}/>
            </div>
        </div>
    )
  
};

export default connect()(LoginPage);
