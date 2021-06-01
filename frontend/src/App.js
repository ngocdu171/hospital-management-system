import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./Styles.css";
import { HSMProvider } from "./context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import EditProfile from "./components/EditProfile";
import Appointment from "./components/Appointment";
import Tester from "./components/Tester";

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
          <Route exact path="/editprofile">
            <EditProfile />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </HSMProvider>
  );
}

export default App;
