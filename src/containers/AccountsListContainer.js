import { connect } from "react-redux";
import AccountsList from "../components/Pages/AccountsPage/AccountsComponents/AccountsList/AccountsList";
import { deleteAccount } from '../reducers/bank_accounts'

const mapStateToProps = state => ({
  accounts: state.accounts
});


const mapDispatchToProps = dispatch => ({
  deleteAccount: id => dispatch(deleteAccount(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsList)


