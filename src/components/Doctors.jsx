import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { AddModal } from './AddModal';


const Doctors = ({doctors}) => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

const handleClick = () => {
  // handleShow()
  setShow(true)
}

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
              onClick={handleClick}
            />
            <h5>{dr.name}</h5>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      {/* <AddModal show={show} handleClose={handleClose} /> */}
      <AddModal show={show} handleClose={() => setShow(false)} />
    </Container>
  );
};

export default Doctors