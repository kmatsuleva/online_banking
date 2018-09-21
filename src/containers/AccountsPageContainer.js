import { connect } from "react-redux";
import { getAllAccounts } from '../reducers/bank_accounts'
import AccountsPage from "../components/Pages/AccountsPage/AccountsPage";

const mapStateToProps = (title, balance, currency) => ({
  title, balance, currency
});

const mapDispatchToProps = {
  getAllAccounts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsPage)


