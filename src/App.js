import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/NavBar";
import Home from "./components/Home.js"; 
import Login from "./pages/auth/Login";  
import SignUp from "./pages/auth/SignUp";  


const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <SignUp />} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;