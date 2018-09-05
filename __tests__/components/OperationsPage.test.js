import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import OperationsPage from "../../src/components/Pages/OperationsPage/OperationsPage"
import OnlineBankingMenu from "../../src/components/Menus/OnlineBankingMenu/OnlineBankingMenu"
import Label from "../../src/components/Common/Label/Label"
import DropDownItem from "../../src/components/Common/DropdownItem/DropdownItem"
import InputTypeText from "../../src/components/Common/InputTypeText/InputTypeText"
import PrimaryButton  from "../../src/components/Common/PrimaryButton/PrimaryButton"


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

  
  

