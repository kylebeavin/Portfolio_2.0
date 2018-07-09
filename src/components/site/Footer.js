import React, { Component } from 'react';

  class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <div className="spacer"></div>
          <ul className="brandList">
            <li><a href="https://www.linkedin.com/in/kyle-beavin-62758a78" target="blank"><button><i className="fab fa-linkedin"></i></button></a></li>
            <li><a href="https://github.com/kylebeavin" target="blank"><button><i className="fab fa-github"></i></button></a></li>
            <li><a href="https://drive.google.com/open?id=1CftfNskaZCpKwZSFqzlsQZwH0Hw94LJj" target="blank"><button><i className="far fa-file"></i></button></a></li>
          </ul>
      </footer>
    )
  }
}

{/* <a href="https://www.linkedin.com/in/kyle-beavin-62758a78" target="blank" className="fab fa-linkedin glyph"></a>
<a href="https://github.com/kylebeavin" target="blank" className="fab fa-github glyph"></a>
<a href="https://drive.google.com/open?id=1CftfNskaZCpKwZSFqzlsQZwH0Hw94LJj" target="blank" className="far fa-file glyph resume"></a> */}
export default Footer;