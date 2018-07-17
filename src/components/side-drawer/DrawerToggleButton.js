import React from 'react';

const DrawerToggleButton = props => (
    <div className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line2">
            <div className="toggle-button__arrow" />
            <div className="toggle-button__arrow" />
        </div>
        <div className="toggle-button__line" />
    </div>
)

export default DrawerToggleButton;