import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";


const Doctors = ({doctors}) => {
  return (
    <Container className="p-4">
      <h3
        className="display-4 mb-4 p-3 text-center"
        style={{ color: "white", background: "#0D6EFD" }}
      >
        Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id} xs={6} sm={4} md={3}>
            <img
              src={dr.img}
              alt={dr.name}
              className="img-thumbnail doctor-img"
            />
            <h5>{dr.name}</h5>
            <h4>{dr.dep}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors