import { connect } from "react-redux";
import { deleteAccount } from '../reducers/bank_accounts'
import { createAccount } from '../reducers/bank_accounts'
import CreateAccount from "../components/Pages/AccountsPage/AccountsComponents/CreateAccount/CreateAccount";

const mapStateToProps = state => ({
  accounts: state.accounts
  // accounts: state.accounts.account
});


const mapDispatchToProps = {
  deleteAccount, 
  createAccount
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount)


