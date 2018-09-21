import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllAccounts } from '../reducers/bank_accounts';

describe('getAllAccounts', () => {
    it('returns data when sendMessage is called', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('/accounts').reply(200, data);

        getAllAccounts.sendMessage(0, 'any').then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});