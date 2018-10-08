import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import TransactionPage from "../TransactionPage/TransactionPage"
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import SelectTransactionForm from "../TransactionsPage/TransactionComponents/SelectTransactionForm/SelectTransactionForm"
import TransactionInfo from "../TransactionsPage/TransactionComponents/TransactionInfo/TransactionInfo"

Enzyme.configure({ adapter: new Adapter() })

describe("< TransactionPage />", () => {
    it('renders without crashing', () => {
        shallow(<TransactionPage />);
    });

    it("renders <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });


    it("renders <SelectTransactionForm /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(SelectTransactionForm).length).toEqual(1);
    });


    it("renders <TransactionInfo /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(TransactionInfo).length).toEqual(1);
    });
})
