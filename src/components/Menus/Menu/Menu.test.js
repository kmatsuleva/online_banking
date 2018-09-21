import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Menu from './Menu'
import Logo from "../../Common/Logo/Logo"
import MenuItem from '../MenuItem/MenuItem';


Enzyme.configure({ adapter: new Adapter() })


describe("< Menu />", () => {
    it('renders without crashing', () => {
        shallow(<Menu />);
    });

    it("renders <Menu /> component", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(Logo).length).toEqual(1);
    });

    it("renders <MenuItem /> component", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.find(MenuItem).length).toEqual(1);
    });
})

  
  

