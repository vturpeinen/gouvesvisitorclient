import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}> {/* props.click holds a reference(the address) of a method of a function, which should get executed when this gets clicked! https://www.youtube.com/watch?v=l6nmysZKHFU 38.25 executing the method from prop CLICK from Backdrop.js */}
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);

export default drawerToggleButton;




/* instructions https://www.youtube.com/watch?v=l6nmysZKHFU */