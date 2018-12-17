import React from "react";
import { Route, Switch } from "react-router-dom";

//import NotFound from "./containers/NotFound";

import AppliedRoute from "./components/AppliedRoute";
import HomePage from "./HomePage";
// import Search from "./Search";
import Home from "./containers/Home";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import AboutUs from "./components/AboutUs";
import Donations from "./Donations";
import ContactUs from "./containers/ContactUs";
import OngoingMissions from "./components/OngoingMissions"; //tämä

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={HomePage}/>
    {/* <AppliedRoute path="/" exact component={Home} props={childProps} /> */}
    <AppliedRoute path="/Search" exact component={Home}/>
    <AppliedRoute path="/Content/:id" exact component={Notes} props={childProps} />
    <AppliedRoute path="/Content/new" exact component={NewNote} props={childProps} />
    <AppliedRoute path="/components/OngoingMissions" component={OngoingMissions} />
    <AppliedRoute path="/components/AboutUs" component={AboutUs} />
    <AppliedRoute path="/Donations" component={Donations} />
    <AppliedRoute path="/ContactUs" component={ContactUs} />
     {/* tämä */}

  </Switch>;