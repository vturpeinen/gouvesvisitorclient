import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import Gouveslogo from '../components/Images/gouves-logo.svg';
import {Navbar} from 'react-bootstrap';
import Media from "react-media";
//import Hamburger from '../components/Images/hamburger.svg';
/* import { from } from 'zen-observable';
 */
class Navigation extends Component {
    render () {
        return (
            <nav inverse collapseOnSelect id="menu" className="navbar navbar-default navbar-fixed-top">
                <div>
                <Navbar.Brand>
                <a href="#">
                        <img src={Gouveslogo} className="navbar-logo" alt="logo"/>
                        </a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                         <a href="#main-menu" className="menu-toggle">
                           <span className="fa fa-bars"></span>
                        </a>
                        {/*  <img src={Hamburger} className="hamburger.svg" alt="hamburger"/>
                         <nav id="main-menu" class="main-menu">
                          <a href="#main-menu-toggle" class="menu-close">
                           <span class="fa fa-close"></span>
                          </a>
                        </nav> */}
                        <a href="#main-menu-toggle" className="backdrop" hidden></a>
                       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/" className="page-scroll">Home</NavLink></li>
                            <li><NavLink to="/components/AboutUs" className="page-scroll">About Us</NavLink></li>
                            <li><NavLink to="/components/OngoingMissions" className="page-scroll">Ongoing Missions</NavLink></li>
                            <li><NavLink to="/Search" className="page-scroll">Adoptions</NavLink></li>
                            <li><NavLink to="/Donations" className="page-scroll">How you can help?</NavLink></li>
                            <li><NavLink to="/ContactUs" className="page-scroll">Contact Us</NavLink></li>
                        </ul>   
                        </div>
                        <div>
                         {/* <Media query={{ maxWidth: 599 }}>
                         </Media> */}
                         </div>
                      </div>
                     </nav>
                    
        );

        
    }
}
export default Navigation;






/* import React, { Component } from 'react';
import {Switch, NavLink, Route} from 'react-router-dom';
import Contact from './Contact';
import Photos from './Photos';
import FrontPage from './FrontPage';
import '../Styles/App.css';

class NavigationBlock extends Component {

   render() {
       return(
           <div className="App">
               <header className="App-header">
                   <NavLink to="/" className="links">FrontPage</NavLink>
                   <NavLink to="/Photos" className="links">Photos</NavLink>
                   <NavLink to="/Contact" className="links">Contact</NavLink>
               </header>
               <Switch>
                   <Route exact path="/" render={(props) => <FrontPage {...props}/>}/>
                   <Route path="/Photos" render={(props) => <Photos {...props}/>}/>
                   <Route path="/Contact" render={(props) => <Contact {...props}/>}/>
               </Switch>

           </div>
       );
   }
}

export default NavigationBlock; */








/* muista! 
npm install --save react-responsive-navbar */
