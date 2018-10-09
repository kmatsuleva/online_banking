import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';
import AccountsPageContainer from './containers/AccountsPageContainer';
import LoginPage from './components/Pages/LoginPage/LoginPage';

jest.dontMock('./App');
Enzyme.configure({ adapter: new Adapter() });

describe('(App) Component', () => {
    describe('is rendering', () => {
        it('without crashing', () => {
            shallow(
                <MemoryRouter initialEntries={['/']} initialIndex={0}>
                    <App/>
                </MemoryRouter>
            );
        });

        const wrapper = shallow(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <App/>
            </MemoryRouter>
        );


        it('(LoginPage) Component', () => {
            expect(
                wrapper.find(LoginPage).length
            ).toEqual(1);
        }); 

        it('(AccountsPageContainer) Component', () => {
            expect(
                wrapper.find(AccountsPageContainer).length
            ).toEqual(1);
        });
    });
});