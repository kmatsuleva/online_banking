
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PrimaryButton from "./PrimaryButton"

Enzyme.configure({ adapter: new Adapter() })

describe("< PrimaryButton />", () => {

    it('renders without crashing', () => {
        shallow(<PrimaryButton />);
    });
    
    it('should handle the click event', () => {
        window.alert = jest.fn();
        const handleClick = () => {
            alert('clicked');
        };
        const output = shallow(
        <PrimaryButton btnVlue="mockValue" to="mockTo"
                onClick = {handleClick()}/>
        );
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('clicked');
    });

    it('should render correctly', () => {
        const handleClick = () => {
            alert('clicked');
        };
        const output = shallow(
        <PrimaryButton btnVlue="mockValue" to="mockTo"
                onClick = {handleClick()}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
      });
});