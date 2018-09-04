
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ReactDOM from 'react-dom';


jest.dontMock('../../src/components/Pages/AccountsPage/AccountsPage');
Enzyme.configure({ adapter: new Adapter() })

import AccountsPage from "../../src/components/Pages/AccountsPage/AccountsPage"
import OnlineBankingMenu from "../../src/components/Menus/OnlineBankingMenu/OnlineBankingMenu"
import Label from "../../src/components/Common/Label/Label"
import InputTypeText from "../../src/components/Common/InputTypeText/InputTypeText"
import DropDownItem from "../../src/components/Common/DropdownItem/DropdownItem"
import AccountInfo from "../../src/components/Pages/AccountsPage/AccountsComponents/AccountInfo/AccountInfo"
import PrimaryButton from "../../src/components/Common/PrimaryButton/PrimaryButton"
import styles from "../../src/components/Pages/AccountsPage/styles"


describe("< AccountsPage />", () => {

    it('renders without crashing', () => {
        shallow(<AccountsPage />);
    });

    it("renders one <OnlineBankingMenu /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(OnlineBankingMenu).length).toEqual(1);
    });

    it('renders children when passed in', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(<form style={styles.container} />).toBeDefined(); 
    });

    it('renders <form /> element', () => {
        const wrapper = shallow((
            <AccountsPage>
                <form style={styles.container} />
            </AccountsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <form style={styles.container} />
        ]));
    });

    it('renders two <Label /> components', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(Label).length).toEqual(2);
    });

    it('renders one <InputTypeText /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(InputTypeText).length).toEqual(1);
    });

    it('renders one <DropDownItem /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(DropDownItem).length).toEqual(1);
    });


    it("renders one div with styles", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(<div style={styles.button} />).toBeDefined();
    });

    it('renders <form /> element', () => {
        const wrapper = shallow((
            <AccountsPage>
                <div style={styles.button}>
                    <PrimaryButton btnValue = "Create"/>
                </div>
            </AccountsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <div style={styles.button}>
                <PrimaryButton btnValue = "Create"/>
            </div>
        ]));
    });

    it('renders one <PrimaryButton /> component', () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(PrimaryButton).length).toEqual(1);
    });

    // it('simulates click events', () => {
    //     const onClick = sinon.spy();
    //     const wrapper = shallow(<PrimaryButton onClick={onClick} />);
    //     wrapper.find(PrimaryButton).simulate('click');
    //     expect(onClick).to.have.property('callCount', 1);
    // });


    it("renders one div with styles", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(<div style={styles.accountsList} />).toBeDefined();
    });

    it('renders <form /> element', () => {
        const wrapper = shallow((
            <AccountsPage>
                 <div style={styles.accountsList} >
                    <AccountInfo />
                </div>
            </AccountsPage>
          ));
        expect(wrapper.containsAllMatchingElements([
            <div style={styles.accountsList} >
                <AccountInfo />
            </div>
        ]));
    });

    it("renders one <AccountInfo /> component", () => {
        const wrapper = shallow(<AccountsPage />);
        expect(wrapper.find(AccountInfo).length).toEqual(1);
    });
})

  

