import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./MainContent";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path=":application_code" element={<Main/>}/>
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();
