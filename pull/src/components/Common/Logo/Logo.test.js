
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Logo from "./Logo"

Enzyme.configure({ adapter: new Adapter() })

describe("< Logo />", () => {

    it('renders without crashing', () => {
        shallow(<Logo />);
    });

    it('should render correctly', () => {
        const output = shallow(
        <Logo  src="../../image.png" to='/' />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});