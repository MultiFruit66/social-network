import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navigation />
        <main className="main">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
