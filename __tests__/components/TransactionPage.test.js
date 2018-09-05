import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import TransactionPage from "../../src/components/Pages/TransactionPage/TransactionPage"
import OnlineMenu from "../../src/components/Menus/OnlineMenu/OnlineMenu"
import Label from "../../src/components/Common/Label/Label"
import DropDownItem from "../../src/components/Common/DropdownItem/DropdownItem"
import TableHeader from "../../src/components/Common/TableHeader/TableHeader"
import TableData from "../../src/components/Common/TableData/TableData"
import PrimaryButton  from "../../src/components/Common/PrimaryButton/PrimaryButton"


describe("< TransactionPage />", () => {
    it('renders without crashing', () => {
        shallow(<TransactionPage />);
    });

    it("renders <OnlineMenu /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(OnlineMenu).length).toEqual(1);
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(DropDownItem).length).toEqual(2);
    });

    it('renders one <FromToDate /> component', () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(FromToDate).length).toEqual(1);
    });

    it("renders two <TableHeader /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(TableHeader).length).toEqual(1);
    });

    it("renders two <TableData /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(TableData).length).toEqual(1);
    });

    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });

    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow((
            <OperationsPage>
               <PrimaryButton btnValue = "Execute"/>
            </OperationsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <PrimaryButton btnValue = "Execute"/>
        ]));
    });
})
