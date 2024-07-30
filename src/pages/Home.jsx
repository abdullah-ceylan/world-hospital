import React from "react";
import Image from "react-bootstrap/Image";
import Img from "../helpers/Hospital.jpg";
import Doctors from "../components/Doctors";

const Home = () => {
  return (
    <>
      <div>
        <Image src={Img} fluid />
      </div>
      <Doctors />
    </>
  );
};

export default Home;
