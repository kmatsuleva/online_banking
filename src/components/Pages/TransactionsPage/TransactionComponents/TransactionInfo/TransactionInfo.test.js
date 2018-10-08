import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import TransactionInfo from "./TransactionInfo"
import TableHeader from "../../../../Common/TableHeader/TableHeader"

Enzyme.configure({ adapter: new Adapter() })

describe("< TransactionInfo />", () => {
    it('renders without crashing', () => {
        shallow(<TransactionInfo />);
    });

    it("renders two <TableHeader /> component", () => {
        const wrapper = shallow(<TransactionInfo />);
        expect(wrapper.find(TableHeader).length).toEqual(1);
    });
})
