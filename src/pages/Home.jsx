// import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Img from "../helpers/Hospital.jpg";
import NavScroll from "../components/NavScroll";
import {doctorData} from "../helpers/data"
import Doctors from "../components/Doctors"

const Home = () => {
  // const [doctors, setDoctors] = useState(doctorData)
  // console.log(setDoctors)

  return (
    <>
      <NavScroll />
      <div>
        <Image src={Img} fluid />
      </div>
      <Doctors doctors={doctorData} />
    </>
  );
};

export default Home;
