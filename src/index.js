import 'milligram/dist/milligram.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Auth from "./components/shared/Auth";
import routes from './components/routes';



ReactDOM.render(
    <BrowserRouter>
      <Auth>
        {routes}
      </Auth>
    </BrowserRouter>,
    document.getElementById('root'));
