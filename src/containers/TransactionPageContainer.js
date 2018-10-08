import { connect } from "react-redux";
import { viewAllTransactions } from '../reducers/transactions'
import TransactionsPage from "../components/Pages/TransactionsPage/TransactionsPage";

const mapStateToProps = ({ transactions }) => ({
    transactions
});


const mapDispatchToProps = {
    viewAllTransactions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsPage)


