import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import HomePage from "../../src/components/Pages/HomePage/HomePage"
import Menu from "../../src/components/Menus/Menu/Menu"
import Label from "../../src/components/Common/Label/Label"
import RequiredField from '../../src/components/Common/RequiredField/RequiredField';
import InputTypeText from "../../src/components/Common/InputTypeText/InputTypeText"
import InputTypePassword from "../../src/components/Common/InputTypePassword/InputTypePassword"

import PrimaryButton  from "../../src/components/Common/PrimaryButton/PrimaryButton"


describe("< HomePage />", () => {
    it('renders without crashing', () => {
        shallow(<HomePage />);
    });

    it("renders <Menu /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(Menu).length).toEqual(1);
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(
            <img src={require('../../../../src/images/home-page-img.jpg')} />
        ).toBeDefined(); 
    });
    
    it('renders <form /> element', () => {
        const wrapper = shallow((
            <AccountsPage>
                <img  />
            </AccountsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <img src={require('../../../../src/images/home-page-img.jpg')} />
        ]));
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it("renders two <RequiredField /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(RequiredField).length).toEqual(2);
    });

    it("renders two <InputTypeText /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(InputTypeText).length).toEqual(1);
    });

    it("renders two <InputTypePassword /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(InputTypePassword).length).toEqual(1);
    });

    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });
})

  
  

