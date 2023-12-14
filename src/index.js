import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation';
import Information from './components/Information/Information';
import UsedTechnologies from './components/UsedTechnologies/UsedTechnologies';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/information" element={<Information/>}></Route>
            <Route path="/usedtechnologies" element={<UsedTechnologies/>}></Route>
        </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
