
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import InputTypeText from "./InputTypeText"  

Enzyme.configure({ adapter: new Adapter() })


describe("< InputTypeText />", () => {

    it('renders without crashing', () => {
        shallow(<InputTypeText />);
    });

    it('should render correctly', () => {
        const output = shallow(
            <InputTypeText placeholder="e.g. 500" disabled/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});