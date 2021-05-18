import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './Styles.css'
import { HSMProvider } from "./context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <HSMProvider>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HSMProvider>
  );
}

export default App;
