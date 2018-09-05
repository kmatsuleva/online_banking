
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Link from "./Link"

Enzyme.configure({ adapter: new Adapter() })

describe("< Link />", () => {

    it('renders without crashing', () => {
        shallow(<Link />);
    });

    it('should render correctly', () => {
        const output = shallow(
            <Link  to="mockTo"  text="mockText"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});