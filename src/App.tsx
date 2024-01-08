import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/Navbar';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <><Navbar /><Dashboard /></>
  );
}

export default App;
