import React, { Component } from 'react';

  class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="spacer"></div>
          <ul className="brandList">
            <li><a href="https://www.linkedin.com/in/kyle-beavin-62758a78" target="blank"><button className="brandButton"><i className="fab fa-linkedin"></i></button></a></li>
            <li><a href="https://github.com/kylebeavin" target="blank"><button className="brandButton"><i className="fab fa-github"></i></button></a></li>
            <li><a href="https://drive.google.com/open?id=1CftfNskaZCpKwZSFqzlsQZwH0Hw94LJj" target="blank"><button className="brandButton"><i className="far fa-file"></i></button></a></li>
            <li><a href="https://angel.co/matthew-kyle-beavin" target="blank"><button className="brandButton"><i className="fab fa-angellist"></i></button></a></li>
          </ul>
      </footer>
    )
  }
}

export default Footer;