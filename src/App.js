import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// import SideDrawer from './components/side-drawer/SideDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Router> */}
          {/* <SideDrawer /> */} 
        {/* </Router> */}
        <Router>
          <Sidebar />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;