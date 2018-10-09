import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import LoginPage from "./LoginPage"
import AsyncValidationForm from './LoginComponents/AsyncValidationForm/AsyncValidationForm';
import Menu from '../../Menus/Menu/Menu';


Enzyme.configure({ adapter: new Adapter() })

describe("< LoginPage />", () => {
    it('renders without crashing', () => {
        shallow(<LoginPage />);
    });

    it("renders <Menu /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(Menu).length).toEqual(1);
    });

    it("renders <AsyncValidationForm /> component", () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper.find(AsyncValidationForm).length).toEqual(1);
    });
})

  
  

