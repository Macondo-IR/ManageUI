import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter } from 'react-router-dom';

import './app/layout/styles.css';
import App from './app/layout/App';



import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

  
 
reportWebVitals();