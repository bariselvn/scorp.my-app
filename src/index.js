import React,{Suspense} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Store} from './Store'
import './i18next'

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={(<div>Loading ----</div>)}>
      <Store>
      <App />

      </Store>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
