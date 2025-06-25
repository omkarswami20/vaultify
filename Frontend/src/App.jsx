import React from 'react';
<<<<<<< HEAD
import { Routes, Route, Link } from 'react-router-dom';
=======
import { Routes, Route, Link, useLocation } from 'react-router-dom';
>>>>>>> 7586bf7 (updated new-folder)
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
<<<<<<< HEAD
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/">VaultDocs</Link>
          </div>
          <div>
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/admin" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Admin Dashboard</Link>
=======
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Admin Dashboard', path: '/admin' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Glassy Navbar */}
      <nav className="backdrop-blur-md bg-gray-800/70 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-blue-400 tracking-tight">
            <Link to="/">VaultDocs</Link>
          </div>
          <div className="flex space-x-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`transition-colors duration-300 text-sm font-medium px-4 py-2 rounded-md 
                  ${
                    location.pathname === path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {name}
              </Link>
            ))}
>>>>>>> 7586bf7 (updated new-folder)
          </div>
        </div>
      </nav>

<<<<<<< HEAD
      <main className="p-4">
=======
      {/* Page Content */}
      <main className="p-4 sm:p-8 max-w-6xl mx-auto">
>>>>>>> 7586bf7 (updated new-folder)
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 7586bf7 (updated new-folder)
