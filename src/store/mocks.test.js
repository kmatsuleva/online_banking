// // import axios from 'axios';
// // import MockAdapter from 'axios-mock-adapter';
// // import { getAllAccounts } from '../reducers/bank_accounts';

// // describe('getAllAccounts', () => {
// //     it('returns data when sendMessage is called', done => {
// //         var mock = new MockAdapter(axios);
// //         const data = { response: true };
// //         mock.onGet('/accounts').reply(200, data);

// //         getAllAccounts.sendMessage(0, 'any').then(response => {
// //             expect(response).toEqual(data);
// //             done();
// //         });
// //     });
// // });


// import React from 'react';
// import ReactDOM from 'react-dom';
// import CreateAccount from "../components/Pages/AccountsPage/AccountsComponents/CreateAccount/CreateAccount";
// import axios from 'axios;'
// import MockAdapter from 'axios-mock-adapter'
// import { shallow } from 'enzyme'
// import PrimaryButton from '../components/Common/PrimaryButton/PrimaryButton';


// describe('CreateAccount', () => {
//     describe('when the button is clicked', () => {
//       const spy = jest.spyOn(CreateAccount.prototype, 'handleSubmit');
//       const app = shallow(<CreateAccount />);
      
//       const mockData = { bpi: { USD: { rate_float: 5 } } };

//     beforeEach(() = {
//         const mock = new MockAdapter(axios);

//         mock
//          .onPost("/accounts")
//          .reply(200, mockData);
 
//         app.find(PrimaryButton).simulate('click');
//     });

//       it('calls the `handleSubmit` function', () => {
//         app.find(PrimaryButton).simulate('click');
//         expect(spy).toHaveBeenCalled();
//       });


//     it('sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request', () => {
//         expect(app.state().rate).toEqual(mockData.bpi.USD.rate_float);
//      });
//     });
//   });