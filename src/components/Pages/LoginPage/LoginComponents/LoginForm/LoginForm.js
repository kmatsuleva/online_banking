import React from "react";
import RequiredField from "../../../../Common/RequiredField/RequiredField"
import Label from "../../../../Common/Label/Label"
import "./styles.css"


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit() {
        const { username, password}  = this.state;
        this.props.onLogin(username, password)
        if(this.state.username === 'admin' && this.state.password === 'admin') {
            this.refs.btn.setAttribute("disabled", "disabled");
        }
    }
    render() {

        return (
        <form>
                    <Label text="User:" className="form__label" />
                    <RequiredField />
                    <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} className="form__input"/>
                    <Label text="Password:" className="form__label" />
                    <RequiredField />
                    <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className="form__input"/>
                    <input type="button" ref= "btn" value = 'Sign in' onClick={this.handleSubmit} className="loginButton"/>
                </form>
        )
    }
}

export default LoginForm;