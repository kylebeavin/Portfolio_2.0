import React from 'react';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import { routes } from './_routes';
import DrawerToggleButton from '../side-drawer/DrawerToggleButton';

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
       <li><Link to="/"><Button className="sideButton" outline color="secondary">Home</Button></Link></li>
       <li><Link to="/about"><Button className="sideButton" outline color="secondary">About</Button></Link></li>
       <li><Link to="/projects"><Button className="sideButton longButton" outline color="secondary">Projects</Button></Link></li>
       <li><Link to="/projex"><Button className="sideButton" outline color="secondary">Projex</Button></Link></li>
       <li><Link to="/contact"><Button className="sideButton longButton" outline color="secondary">Contact</Button></Link></li>
       <li><DrawerToggleButton /></li>
      </ul>
    </div>
    <div className="sidebar-route">
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
)

export default Sidebar;