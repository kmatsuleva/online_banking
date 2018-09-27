import { connect } from "react-redux";
import { getAllAccounts } from '../reducers/bank_accounts'
import { deleteAccount } from '../reducers/bank_accounts'
import { createAccount } from '../reducers/bank_accounts'


import AccountsPage from "../components/Pages/AccountsPage/AccountsPage";

const mapStateToProps = state => ({
  accounts: state.accounts
});


const mapDispatchToProps = {
  getAllAccounts,
  deleteAccount, 
  createAccount
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage)


