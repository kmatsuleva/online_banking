import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import PrimaryButton from './PrimaryButton';

Enzyme.configure({ adapter: new Adapter() });

describe('(PrimaryButton) Component', () => {
	it('calls press callback when pressed', () => {
		const callback = jest.fn();
		const wrapper = shallow(<PrimaryButton onClick={callback} />);
		wrapper.simulate('click');
		expect(callback).toHaveBeenCalled();
	})
  })