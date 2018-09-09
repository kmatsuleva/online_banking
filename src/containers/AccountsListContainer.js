import { connect } from "react-redux";
import AccountsList from "../components/Pages/AccountsPage/AccountsComponents/AccountsList/AccountsList";

const mapStateToProps = state => ({
  accounts: state.accounts
});

export default connect(mapStateToProps)(AccountsList);
