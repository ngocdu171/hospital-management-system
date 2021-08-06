import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./Styles.css";
import { HSMContext, HSMProvider } from "./context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import EditProfile from "./components/EditProfile";
import Book from "./pages/Book";
import Appointment from "./pages/Appointment";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getCountries()
  }, []);

  function getCountries() {
    axios.get(`https://api.covid19api.com/countries`)
    .then((response) => {
      // console.log("day la countries: ", response);
      setCountries(response.data);
    })
  }
  // const {patients} = useContext(HSMContext);
  
  
  // setCountries(getCountries());
  // console.log(countries);
  // console.log(patients);
  return (
    <HSMProvider>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <CountrySelector countries={countries} />
        <Highlight />
        <Summary />
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
          <Route path="/book">
            <Book />
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
