import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar.tsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Content from './Containers/Content/Content';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/pages/home" />} />
        <Route path={`/pages/:pageName`} element={<Content />} />
        <Route path="*" element={<h2 className="text-center">Page not found</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;


