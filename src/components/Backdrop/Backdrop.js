import React from 'react';

import './Backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} /> /* executing whatever's on click prop */
);

export default backdrop;





/* instructions https://www.youtube.com/watch?v=l6nmysZKHFU */