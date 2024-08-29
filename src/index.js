import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import GlobalStyle from '~/Components/GlobalStyles/';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </BrowserRouter>,
);

reportWebVitals();
