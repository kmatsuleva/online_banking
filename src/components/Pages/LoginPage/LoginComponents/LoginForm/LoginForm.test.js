import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import RequiredField from "../../../../Common/RequiredField/RequiredField"
import LoginForm from './LoginForm';
import Label from '../../../../Common/RequiredField/RequiredField'

Enzyme.configure({ adapter: new Adapter() })

describe("< LoginForm />", () => {
    it('renders without crashing', () => {
        shallow(<LoginForm />);
    });

    it("renders <Label /> component", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it("renders <RequiredField /> component", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.find(RequiredField).length).toEqual(2);
    });
})

  
  