import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers'
import axios from "axios";
import MockAdapter from "axios-mock-adapter";


export const client = axios.create();

const mock = new MockAdapter(axios)

if (process.env.NODE_ENV === 'development') {
    console.log('DEVELOPMENT BUILD')

    mock.onPost('/login').reply((response) => {
        console.log('i am in a mock')
        const data = JSON.parse(response.data)
        if(data.username === 'admin' && data.password === 'admin') {
            return ([200, { message: console.log('hi') } ]);
        } else {
            return([500, { success: false } ]);
        }
    }); 

    mock.onGet('/accounts').reply( () => {
        console.log('i am in a mock')
        return (
            [
                200, {
                data: [
                    {
                        id: 1,
                        title: 'BG56BUIN65431544786321',
                        balance: 657,
                        currency: 'USD'
                    },
                
                    {
                        id: 2,
                        title: 'BG56BUIN64563424786321',
                        balance: 657,
                        currency: 'EUR'
                    },
                
                    {
                        id: 3,
                        title: 'BG56BUIN65412345686321',
                        balance: 657,
                        currency: 'BGN'
                    }
                ]
            }
            ]
        )
    });


    mock.onPost('/accounts').reply(() => {
        return ([200, { message: console.log('tratarta') }])
      })
} else {
    mock.restore()
}



 export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(
          axiosMiddleware(client)
        )
      );
      
    return store
      
}  