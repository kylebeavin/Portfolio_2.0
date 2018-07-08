import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

  class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Row>
          <Col>
          <div className="spacer"></div>
          <p>Portfolio_2.0</p>
          </Col>
          <a href="https://www.linkedin.com/in/kyle-beavin-62758a78" target="blank" className="fab fa-linkedin glyph"></a>
          <a href="https://github.com/kylebeavin" target="blank" className="fab fa-github glyph"></a>
          <a href="https://drive.google.com/open?id=1CftfNskaZCpKwZSFqzlsQZwH0Hw94LJj" target="blank" className="far fa-file glyph resume"></a>
          {/* <i className="fas fa-angle-double-left"></i> */}
        </Row>
      </footer>
    )
  }
}

export default Footer;