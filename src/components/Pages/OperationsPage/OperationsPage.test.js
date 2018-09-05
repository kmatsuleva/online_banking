import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import OperationsPage from "./OperationsPage"
import OnlineBankingMenu from "../../Menus/OnlineBankingMenu/OnlineBankingMenu";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import Label from "../../Common/Label/Label"
import InputTypeText from "../../Common/InputTypeText/InputTypeText"

Enzyme.configure({ adapter: new Adapter() })


describe("< OperationsPage />", () => {
    it('renders without crashing', () => {
        shallow(<OperationsPage />);
    });

    it("renders <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });


    it("renders <Label /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(Label).length).toEqual(4);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(DropDownItem).length).toEqual(2);
    });


    it("renders two <InputTypeText /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(InputTypeText).length).toEqual(2);
    });

    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });

})

  
  

