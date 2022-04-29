import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Expenses from './Expenses';
import Invoice from "./Invoice";
import Contact from "./Contact";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
document.getElementById('root'));