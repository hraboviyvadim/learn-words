import {createStore} from 'redux';
import reducer from '../reducers/index';

const store = createStore(reducer);
// dev only
window.store = store;

export default store;