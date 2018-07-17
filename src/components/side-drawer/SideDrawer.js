import React from 'react';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import { routes } from '../site/_routes2';
import DrawerToggleButton from '../side-drawer/DrawerToggleButton'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div>
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/project1"><Button className="sideButton longButton" outline color="secondary">project1</Button></Link></li>
                <li><Link to="/project2"><Button className="sideButton longButton" outline color="secondary">project2</Button></Link></li>
                <li><Link to="/project3"><Button className="sideButton longButton" outline color="secondary">project3</Button></Link></li>
                <li><Link to="/project4"><Button className="sideButton longButton" outline color="secondary">project4</Button></Link></li>
                <li><Link to="/project5"><Button className="sideButton longButton" outline color="secondary">project5</Button></Link></li>
                <li><Link to="/project6"><Button className="sideButton longButton" outline color="secondary">project6</Button></Link></li>
                <li><Button className="sideButton longButton" outline color="secondary"><DrawerToggleButton click={props.drawerToggleClickHandler} /></Button></li>
            </ul>
        </nav>
        <div className="mainDiv">
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            ))}
        </div>
        </div>
    );
};

export default SideDrawer;