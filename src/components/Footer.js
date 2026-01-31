import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h3 style={{color: '#fff', fontWeight: 'bold'}}>Elisa Resuli</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/elisa-resuli-411757322/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/ElisaEl-prg" target="_blank" rel="noopener noreferrer">
                <img src="https://pngimg.com/d/github_PNG83.png" alt="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{textAlign: 'center', marginTop: '30px'}}>
              Copyright © 2026. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;