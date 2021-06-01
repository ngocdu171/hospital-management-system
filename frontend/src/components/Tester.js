import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Appointment from "./Appointment";
import EditProfile from "./EditProfile";

function Tester() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/editprofile">
                <EditProfile />
              </Route>
              <Route path="/appointment">
                <Appointment />
              </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Tester
