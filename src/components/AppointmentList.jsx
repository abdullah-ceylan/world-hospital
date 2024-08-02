import React from "react";
import { Container } from "react-bootstrap";

const AppointmentList = ({ appointments, setAppointments }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2">Appointment</h3>

        {!appointments.length && (
            <img src="./img/appointment.jpg" width="50%" alt="img" />
        )}

        {appointments.map((item) => {
            const {id, patient, consulted, doctor, day} = item
            return(
                <div>
                    <Row>
                        <Col>
                            <h4>{patient}</h4>
                            <h4>{doctor}</h4>
                            <h5>{new Date(day).toLocaleDateString()}</h5>
                            <h5>{new Date(day).toLocaleTimeString()}</h5>
                        
                        </Col>
                    </Row>
                </div>
            )
        })}

    </Container>
  );
};

export default AppointmentList;
