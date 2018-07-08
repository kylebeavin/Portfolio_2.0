import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import SideDrawer from './components/side-drawer/SideDrawer';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {

    return (
      <div>
        <Header drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <Router>
          <div>
          <Sidebar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} drawerToggleClickHandler={this.drawerToggleClickHandler} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;