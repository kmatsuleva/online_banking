import { connect } from "react-redux";
import { checkAuth } from '../reducers//auth'
import LoginForm from "../components/Pages/LoginPage/LoginComponents/LoginForm/LoginForm";

const mapStateToProps = state => ({
  username: state.auth.username, 
  password: state.auth
});


const mapDispatchToProps = {
    checkAuth
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)


