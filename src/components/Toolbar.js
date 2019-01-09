import React from 'react';
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom';
import './SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo  from '../components/Images/gouves-logo.svg';

const ToolBar = props => ( /* forward these props to DrawerToggleButton */
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} /> {/* drawerClickHandler = prop name used in app.js file  */}
            </div>
            <div className="toolbar__logo"><a href="/">
            <img src={logo} style={{width:150, height: 57, marginTop: 1}} />
            </a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/components/AboutUs">About Us</Link></li>
                    <li><Link to="/components/OngoingMissions">Ongoing Missions</Link></li>
                    <li><Link to="/Adopt">Adoptions</Link></li>
                    <li><Link to="/Help">How you can help?</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)
export default ToolBar;





/* instructions https://www.youtube.com/watch?v=l6nmysZKHFU */





/* import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Toolbar.css';
import Gouveslogo from '../components/Images/gouves-logo.svg';
import {Navbar} from 'react-bootstrap';

class Navigation extends Component {
    render () {
        return (
            <nav inverse collapseOnSelect id="NavigationCSS" className="navbar navbar-default navbar-fixed-top">
                <div>
                <Navbar.Brand>
                <a href="/">
                        <img src={Gouveslogo} className="navbar-logo" alt="logo"/>
                        </a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                         <a href="#main-menu" className="menu-toggle">
                           <span className="fa fa-bars"></span>
                        </a>
                     
                        <a href="#main-menu-toggle" className="backdrop" hidden></a>
                       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink to="/" className="page-scroll">Home</NavLink></li>
                            <li><NavLink to="/components/AboutUs" className="page-scroll">About Us</NavLink></li>
                            <li><NavLink to="/components/OngoingMissions" className="page-scroll">Ongoing Missions</NavLink></li>
                            <li><NavLink to="/Adopt" className="page-scroll">Adoptions</NavLink></li>
                            <li><NavLink to="/Help" className="page-scroll">How you can help?</NavLink></li>
                            <li><NavLink to="/ContactUs" className="page-scroll">Contact Us</NavLink></li>
                        </ul>   
                        </div>
                        <div>
                       
                         </div>
                      </div>
                     </nav>
                    
        );

        
    }
}
export default Navigation;



 */