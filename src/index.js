import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './components/Root';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
