import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home/container';

function App() {
  return (
    <Container fluid className="mainContainer">
      {/* <Row>
        <Col lg={12} md={12} sm={12} xl={12} xs={12}>
          <div className="header">NUMBERS</div>
        </Col>
      </Row> */}
      <Row>
        <Col lg={12} md={12} sm={12} xl={12} xs={12}>
          <span className="tagline">Interesting facts about numbers</span>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xl={12} xs={12}>
          <Home />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
