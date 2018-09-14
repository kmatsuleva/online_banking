import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import LoginPage from "./LoginPage"
import Menu from "../../Menus/Menu/Menu";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton"
import RequiredField from "../../Common/RequiredField/RequiredField"
import Label from "../../Common/Label/Label"


Enzyme.configure({ adapter: new Adapter() })

describe("< LoginPage />", () => {
    it('renders without crashing', () => {
        shallow(<LoginPage />);
    });

    it("renders <Menu /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(Menu).length).toEqual(1);
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it("renders two <RequiredField /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(RequiredField).length).toEqual(2);
    });

    it("renders one <PrimaryButton /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });
})

  
  

