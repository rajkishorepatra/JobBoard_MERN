import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextUIProvider } from '@nextui-org/react';
import JobListing from './pages/JobListing';
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <NextUIProvider>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/jobs' element={<JobListing />} />
        {/* <App /> */}
      </Routes>
    </NextUIProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();