import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./views/Header";
import Home from "./views/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
