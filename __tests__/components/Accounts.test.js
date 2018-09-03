
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

jest.dontMock('../../src/components/Pages/AccountsPage/AccountsPage');
Enzyme.configure({ adapter: new Adapter() })

import AccountsPage from "../../src/components/Pages/AccountsPage/AccountsPage"
import OnlineBankingMenu from "../../src/components/Menus/OnlineBankingMenu/OnlineBankingMenu"
import AddNewAccount from "../../src/components/Pages/AccountsPage/AccountsComponents/AddNewAccount/AddNewAccount"
import AllAccountsList from "../../src/components/Pages/AccountsPage/AccountsComponents/AllAccountsList/AllAccountsList"

describe("<AccountsPage>", () => {
    it("contains spec with an expectation", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });

    it("contains spec with an expectation", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(AddNewAccount).length).toEqual(1);
    });

    it("contains spec with an expectation", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(AllAccountsList).length).toEqual(1);
    });
});
  

