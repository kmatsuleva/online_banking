import { connect } from "react-redux";
import { getAllAccounts } from '../reducers/bank_accounts'
import AccountsPage from "../components/Pages/AccountsPage/AccountsPage";

const mapStateToProps = (state) => ({
  title: state.accounts.title, 
  balance: state.accounts.balance, 
  currency: state.accounts.currency
});

const mapDispatchToProps = {
  getAllAccounts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage)


