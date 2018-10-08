import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import SelectTransactionForm from "../../TransactionComponents/SelectTransactionForm/SelectTransactionForm"
import Label from "../../../../Common/Label/Label"
import DropDownItem from "../../../../Common/DropDownItem/DropDownItem"
import FromToDate from "../../../../Common/FromToDate/FromToDate"
import PrimaryButton from "../../../../Common/PrimaryButton/PrimaryButton"

Enzyme.configure({ adapter: new Adapter() })

describe("< SelectTransactionForm />", () => {
    it('renders without crashing', () => {
        shallow(<SelectTransactionForm />);
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<SelectTransactionForm />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<SelectTransactionForm />);
        expect(wrapper.find(DropDownItem).length).toEqual(2);
    });

    it('renders one <FromToDate /> component', () => {
        const wrapper = shallow(<SelectTransactionForm />);
        expect(wrapper.find(FromToDate).length).toEqual(1);
    });


    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow(<SelectTransactionForm />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });

});
