import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./views/Header";
import Home from "./views/Home";
import Footer from "./views/Footer";
import CityListPage from "./views/CityData/CityListPage";
import Login from "./views/Components/Login";
import Register from "./views/Components/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/citydata/:city">
            <Header />
            <CityListPage />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
