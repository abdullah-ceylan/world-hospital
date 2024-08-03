import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='p-1 text-center' fluid style={{ color: "white", background: "#0D6EFD" }}>
      <Row className='p-2 my-2'>
        <Col>
          <h6>World Hospital</h6>
          <h5>444 44 44 44</h5>
        </Col>
        <Col>
          <h6>World Hospital</h6>
          <h5>444 44 44 44</h5>
        </Col>
        <Col>
          <h6>World Hospital</h6>
          <h5>444 44 44 44</h5>
        </Col>
      </Row>

      <Row className='p-2 my-4'>
        <Col>
          <h2 className="text-center text-white">WORLD HOSPITAL</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer