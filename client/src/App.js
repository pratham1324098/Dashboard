import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.js';


const App = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default App;