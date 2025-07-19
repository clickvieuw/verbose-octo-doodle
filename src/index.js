import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <ThemeProvider>
     <App />
     <Footer/>
  </ThemeProvider>
  </BrowserRouter>
);
