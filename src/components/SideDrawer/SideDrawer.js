import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
   return (<nav className={drawerClasses}>
        <ul>
            <li><Link to="/components/AboutUs">About Us</Link></li>
            <li><Link to="/components/OngoingMissions">Ongoing Missions</Link></li>
            <li><Link to="/Adopt">Adoptions</Link></li>
            <li><Link to="/Help">How you can help?</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
    </nav>);
};

export default sideDrawer;


/* instructions https://www.youtube.com/watch?v=l6nmysZKHFU */