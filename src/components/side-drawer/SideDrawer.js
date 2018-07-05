import React from 'react';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const SideDrawer = props => (
        <nav className="side-drawer">
            <div>
                <ul>
                    <li><Link to="/1"><Button className="sideButton" outline color="secondary">project</Button></Link></li>
                    <li><Link to="/2"><Button className="sideButton" outline color="secondary">project</Button></Link></li>
                    <li><Link to="/3"><Button className="sideButton" outline color="secondary">project</Button></Link></li>
                    <li><Link to="/4"><Button className="sideButton" outline color="secondary">project</Button></Link></li>
                    <li><Link to="/5"><Button className="sideButton" outline color="secondary">project</Button></Link></li>
                </ul>
            </div>
        </nav>
);

export default SideDrawer;