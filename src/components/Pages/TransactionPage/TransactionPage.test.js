import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import TransactionPage from "../TransactionPage/TransactionPage"
import OnlineBankingMenu from '../../Menus/OnlineBankingMenu/OnlineBankingMenu';
import FromToDate from '../../Common/FromToDate/FromToDate'
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import DropDownItem from "../../Common/DropdownItem/DropdownItem"
import TableHeader from "../../Common/TableHeader/TableHeader"
import TableData from "../../Common/TableData/TableData"
import Label from "../../Common/Label/Label"

Enzyme.configure({ adapter: new Adapter() })

describe("< TransactionPage />", () => {
    it('renders without crashing', () => {
        shallow(<TransactionPage />);
    });

    it("renders <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<TransactionPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
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

})
