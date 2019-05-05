import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import Navigation from "./components/Navigation.js"
import Profile from "./components/Profile.js"


function App() {
  return (
    <div className = "container">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
