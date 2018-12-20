import React from "react";
import { Switch } from "react-router-dom";

//import NotFound from "./containers/NotFound";

import AppliedRoute from "./components/AppliedRoute";
import HomePage from "./HomePage";
// import Search from "./Search";
import Males from "./containers/Males";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import AboutUs from "./components/AboutUs";
//import Donations from "./Donations";
import ContactUs from "./containers/ContactUs";
import Animals from "./containers/Animals";
import Females from "./containers/Females";
import OngoingMissions from "./components/OngoingMissions";
import Help from "./components/Help";



export default ({ childProps }) =>
 <Switch>
   <AppliedRoute path="/" exact component={HomePage}/>
   {/* <AppliedRoute path="/" exact component={Home} props={childProps} /> */}
   <AppliedRoute path="/Males" exact component={Males}/>
   <AppliedRoute path="/Content/:id" exact component={Notes} props={childProps} />
   <AppliedRoute path="/Content/new" exact component={NewNote} props={childProps} />
   <AppliedRoute path="/components/Ongoingmissions" component={OngoingMissions} />
   <AppliedRoute path="/components/AboutUs" component={AboutUs} />
   <AppliedRoute path="/Help" component={Help} />
   <AppliedRoute path="/ContactUs" component={ContactUs} />
   <AppliedRoute path="/Adopt" component={Animals}/>
   <AppliedRoute path="/Females" exact component={Females}/>
 </Switch>;