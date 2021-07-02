import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-widgets/dist/css/react-widgets.css';
import {createBrowserHistory} from 'history';

import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<App />, document.getElementById('root'));


// export const history = createBrowserHistory();

// ReactDOM.render(
//   <Router history={history}>
//     <ScrollToTop>
//       <App />
//     </ScrollToTop>
//   </Router>,
//   document.getElementById('root')
// );
reportWebVitals();
