import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
// import App2 from './App2.jsx'; 
// import App3 from './App3';
// import App4 from './App4';
import App5 from './App5';
import { BrowserRouter } from 'react-router-dom';
// import App6 from './App6';
import UserContext from './userContext/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <UserContext> */}
    <App5/>
    {/* </UserContext> */}
    </BrowserRouter> 
);
