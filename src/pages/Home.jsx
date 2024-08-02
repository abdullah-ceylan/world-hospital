import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Img from "../helpers/Hospital.jpg";
import NavScroll from "../components/NavScroll";
import {doctorData} from "../helpers/data"
import Doctors from "../components/Doctors"
import AppointmentList from "../components/AppointmentList";
import {appointmentData} from "../helpers/data"

const Home = () => {
  // const [doctors, setDoctors] = useState(doctorData)
  // console.log(setDoctors)
  const [appointments, setAppointments] = useState(appointmentData);

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  return (
    <>
      <NavScroll />
      <div>
        <Image src={Img} fluid />
      </div>
      <Doctors
        doctors={doctorData}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList />
    </>
  );
};

export default Home;
