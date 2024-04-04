// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrigindo a importação
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import "./index.css"
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route path="equipe" element={<Equipe />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
