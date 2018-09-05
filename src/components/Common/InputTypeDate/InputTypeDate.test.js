
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import InputTypeDate from "./InputTypeDate"  

Enzyme.configure({ adapter: new Adapter() })


describe("< InputTypeDate />", () => {

    it('renders without crashing', () => {
        shallow(<InputTypeDate />);
    });

    it('should render correctly', () => {
        const output = shallow(
            <InputTypeDate min="2018-01-01" max="2022-08-09"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});