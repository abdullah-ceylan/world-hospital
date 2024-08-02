import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

//? const dizi = []  -> true
//? dizi ? x : y   ->  x

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) =>
    setAppointments(appointments.filter((item) => item.id !== id));

  const handleDoubleClick = (id) => {
    return setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
      // map() gibi döngüler ile itere ettiğimiz için && kullanamayız
      // çünkü girdi sayısı kadar çıktı da olması gerekiyor.
      // bundan dolayı ? : ternery kullanıyoruz.
    );
  };

  return (
    <Container className="p-2">
      <h3
        className="display-4 mb-4 p-2 text-center"
        style={{ color: "white", background: "#0D6EFD" }}
      >
        Appointment List
      </h3>
      <div type="button" className="d-flex flex-column align-items-center">
        {!appointments.length && (
          <img src="./img/appointment.jpg" width="80%" alt="img" />
        )}

        {appointments.map((item) => {
          const { id, patient, consulted, doctor, day } = item;
          return (
            <div
              key={id}
              className={consulted ? "appointments consulted" : "appointments"}
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Row className="justify-content-center align-items-center g-3">
                <Col xs={12} sm={12} md={5}>
                  <h4>{patient}</h4>
                  <h4>{doctor}</h4>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h5>{new Date(day).toLocaleDateString()}</h5>
                </Col>
                <Col xs={2} sm={4} md={1}>
                  <h5>{new Date(day).toLocaleTimeString()}</h5>
                </Col>
                <Col>
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(id)}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
