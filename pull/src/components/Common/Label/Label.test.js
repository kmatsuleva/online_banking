
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Label from "./Label"

Enzyme.configure({ adapter: new Adapter() })

describe("<Label />", () => {

    it('renders without crashing', () => {
        shallow(<Label />);
    });

    it('should render correctly', () => {
        const output = shallow(
        <Label text="mockText" />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});