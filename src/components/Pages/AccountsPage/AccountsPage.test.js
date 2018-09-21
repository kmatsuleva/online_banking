
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import AccountsPage from "./AccountsPage"
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import CreateAccountContainer from "../../../containers/CreateAccountContainer"

Enzyme.configure({ adapter: new Adapter() })


describe("< AccountsPage />", () => {

    it('renders without crashing', () => {
        shallow(<AccountsPage />);
    });

    it("renders one <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });

    it("renders one <CreateAccountContainer /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(CreateAccountContainer).length).toEqual(1);
    });
})

