import { createStore } from "redux";
import reducer from "./reducers"


 export default () => {
  const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);
    return store
      
}  

