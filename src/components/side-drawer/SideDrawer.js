import React from 'react';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const SideDrawer = props => (
        <nav className="side-drawer">
            <div>
                <ul>
                    <li><Link to="/1"><Button></Button></Link></li>
                    <li><Link to="/2"><Button></Button></Link></li>
                    <li><Link to="/3"><Button></Button></Link></li>
                    <li><Link to="/4"><Button></Button></Link></li>
                    <li><Link to="/5"><Button></Button></Link></li>
                </ul>
            </div>
        </nav>
);

export default SideDrawer;