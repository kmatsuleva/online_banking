import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import Menu from './Menu'
import Link from "../../Common//Link/Link"
import Logo from "../../Common/Logo/Logo"


Enzyme.configure({ adapter: new Adapter() })


describe("< Menu />", () => {
    it('renders without crashing', () => {
        shallow(<Menu />);
    });

    it("renders <Link /> component", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Link).length).toEqual(1);
    });

    it("renders <Menu /> component", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Logo).length).toEqual(1);
    });

})

  
  

