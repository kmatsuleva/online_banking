import { createStore, applyMiddleware } from "redux";
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers'
import axios from "axios";
import MockAdapter from "axios-mock-adapter/types";

export const client = axios.create();

if (process.env === 'development') {
  var mock = new MockAdapter(axios);
  
  mock.onPost('/login').reply((response) => {
      const data = JSON.parse(response.data)
      if(data.username === 'admin' && data.password === 'admin') {
          return ([200, { message: console.log('hi') } ]);
      } else {
          return([500, { success: false } ]);
      }
  }); 
}



mock.onPost('/login').reply((response) => {
    const data = JSON.parse(response.data)
    if(data.username === 'admin' && data.password === 'admin') {
        return ([200, { message: console.log('hi') } ]);
    } else {
        return([500, { success: false } ]);
    }
}); 


export default () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(
          axiosMiddleware(client)
        )
      );
      
    return store
      
}  
  