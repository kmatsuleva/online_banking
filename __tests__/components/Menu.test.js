import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import Menu from "../../src/components/Menus/Menu/Menu"
import Link from "../../src/components/Common/Link/Link"
import Logo from "../../src/components/Common/Logo/Logo"

describe("<AccountsPage>", () => {
    it("contains spec with an expectation", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Link).length).toEqual(1);
    });

    it("contains spec with an expectation", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Logo).length).toEqual(1);
    });
    

});
  

