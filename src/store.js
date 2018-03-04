import {createStore} from 'redux';
import {hotAndColdGameReducer} from "./reducers";
export default createStore(hotAndColdGameReducer);