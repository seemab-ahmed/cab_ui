// src/App.tsx
import React from 'react';
import { BrowserRouter as Router , Routes, Route, Navigate  } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Dashboard from 'pages/Dashboard/Dashboard';
const App  = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn , 'login user : ')
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/signup" element={<RegisterPage />}/>
        {isLoggedIn && 
        <Route path="/dashboard" element={<Dashboard />}/>
        }
        <Route path="/*" element={<Navigate to="/" />} />
        {/* <Route path="/x" element={<x/>}/>
        <Route path="/y" element={<y/>}/>
        <Route path="/z" element={<z/>}/>
        <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
