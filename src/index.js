import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    
      <Router basename='/EmployeeList'>
      <Provider store={store}>
        <App />
        </Provider>
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


