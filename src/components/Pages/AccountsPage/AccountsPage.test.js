
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import AccountsPage from "./AccountsPage"
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import AccountInfo from "./AccountsComponents/AccountInfo/AccountInfo";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText"


Enzyme.configure({ adapter: new Adapter() })


describe("< AccountsPage />", () => {

    it('renders without crashing', () => {
        shallow(<AccountsPage />);
    });

    it("renders one <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });

    it('renders two <Label /> components', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it('renders one <InputTypeText /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(InputTypeText).length).toEqual(1);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(DropDownItem).length).toEqual(1);
    });


    it('renders one <PrimaryButton /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });

    // it('simulates click events', () => {
    //     const onClick = sinon.spy();
    //     const wrapper = shallow(<PrimaryButton onClick={onClick} />);
    //     wrapper.find(PrimaryButton).simulate('click');
    //     expect(onClick).to.have.property('callCount', 1);
    // });

    it("renders one <AccountInfo /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(AccountInfo).length).toEqual(1);
    });
})

  

