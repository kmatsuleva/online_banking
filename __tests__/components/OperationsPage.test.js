import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import OperationsPage from "../../src/components/Pages/OperationsPage/OperationsPage"
import OnlineMenu from "../../src/components/Menus/OnlineMenu/OnlineMenu"
import Label from "../../src/components/Common/Label/Label"
import DropDownItem from "../../src/components/Common/DropdownItem/DropdownItem"
import InputTypeText from "../../src/components/Common/InputTypeText/InputTypeText"
import PrimaryButton  from "../../src/components/Common/PrimaryButton/PrimaryButton"


describe("< OperationsPage />", () => {
    it('renders without crashing', () => {
        shallow(<OperationsPage />);
    });

    it("renders <OnlineMenu /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(OnlineMenu).length).toEqual(1);
    });


    it("renders <Label /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(Label).length).toEqual(4);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(DropDownItem).length).toEqual(2);
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(<OperationsPage />);
        expect(
            <img src={require('../../../../src/images/home-page-img.jpg')} />
        ).toBeDefined(); 
    });
    
    it('renders <img /> element', () => {
        const wrapper = shallow((
            <OperationsPage>
                <img  />
            </OperationsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <img src={require('../../../../src/images/home-page-img.jpg')} />
        ]));
    });


    it("renders two <RequiredField /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(RequiredField).length).toEqual(2);
    });

    it("renders two <InputTypeText /> component", () => {
        const wrapper = shallow(<OperationsPage />);
        expect(wrapper.find(InputTypeText).length).toEqual(1);
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

  
  

