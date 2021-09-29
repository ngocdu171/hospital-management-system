import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Styles.css";
import { HSMProvider } from "./context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Appointment from "./pages/Appointment";
import TrackCovid from "./pages/TrackCovid";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/trackcovid">
            <TrackCovid />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HSMProvider>
  );
}

export default App;
