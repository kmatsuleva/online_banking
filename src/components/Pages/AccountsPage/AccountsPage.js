import React from "react";
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import "./styles.css"
import CreateAccountContainer from "../../../containers/CreateAccountContainer";

class AccountsPage extends React.Component {

    componentDidMount(){
        const { getAllAccounts, title, balance, currency } = this.props;
        getAllAccounts(title, balance, currency);
    }

    render() {
      return (
        <div >
            <OnlineBankingMenu />
            <div>
                <CreateAccountContainer />
            </div> 
        </div>
    )}};

export default AccountsPage;
 