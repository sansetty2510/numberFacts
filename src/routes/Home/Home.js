import React from 'react';
import {
  Button, Row, Col
} from 'react-bootstrap';
import {
  MATH, YEAR, DATE, TRIVIA
} from '../../api/constant';
import Loader from '../../component/loader/loader';

const factsDescription = (factsData) => {
  const {
    isValidData, text
  } = factsData;
  return (
    <div>
      {
        isValidData
        && (
        <div>
          <div>
            Type:
            {' '}
            <span className="capitalize">
              {factsData.type}
            </span>
          </div>
          <div>
            Number:
            {' '}
            {factsData.type === DATE ? factsData.year : factsData.number}
          </div>
        </div>
        )
      }
      {text}
    </div>
  );
};

const HomeComponent = props => (
  <Row>
    <Col xl={12} lg={12} md={6} sm={6} xs={6}>
      <Row className="section sectionFontStyle">
        <Col className="tryItOut" xl={12} lg={12} md={12} sm={12} xs={12}>
          Try it out!
        </Col>
        <Col className="tryOutButtons" xl={3} lg={3} md={6} sm={12} xs={12}>
          <Button block variant="primary" onClick={() => props.getFacts(TRIVIA)}>TRIVIA</Button>
        </Col>
        <Col className="tryOutButtons" xl={3} lg={3} md={6} sm={12} xs={12}>
          <Button block variant="primary" onClick={() => props.getFacts(DATE)}>DATE</Button>
        </Col>
        <Col className="tryOutButtons" xl={3} lg={3} md={6} sm={12} xs={12}>
          <Button block variant="primary" onClick={() => props.getFacts(YEAR)}>YEAR</Button>
        </Col>
        <Col className="tryOutButtons" xl={3} lg={3} md={6} sm={12} xs={12}>
          <Button block variant="primary" onClick={() => props.getFacts(MATH)}>MATH</Button>
        </Col>
      </Row>
    </Col>
    <Col xl={12} lg={12} md={6} sm={6} xs={6}>
      <Row className="section sectionFontStyle">
        <Col className="tryItOut" xl={12} lg={12} md={12} sm={12} xs={12}>
          <span>
            {
              props.isLoading
              && <Loader type="bubbles" color="#ffffff" height="34px" width="55px" />
            }
          </span>
        </Col>
        <Col className="tryItOut" xl={12} lg={12} md={12} sm={12} xs={12}>
          {
            !props.isLoading
            && factsDescription(props.factsData)
          }
        </Col>
      </Row>
    </Col>
  </Row>
);

export default HomeComponent;
