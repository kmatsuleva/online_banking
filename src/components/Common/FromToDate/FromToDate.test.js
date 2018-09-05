
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FromToDate from "./FromToDate"
import Label from "../Label/Label"  
import InputTypeDate from "../InputTypeDate/InputTypeDate"  

Enzyme.configure({ adapter: new Adapter() })

describe("< FromToDate />", () => {

    it('renders without crashing', () => {
        shallow(<FromToDate />);
    });

    it('should render correctly', () => {
        const output = shallow(
        <FromToDate  />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<FromToDate />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it("renders <InputTypeDate /> component", () => {
        const wrapper = shallow(<FromToDate />);
        expect(wrapper.find(InputTypeDate).length).toEqual(2);
    });
});