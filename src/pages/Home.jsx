import React from "react";
import Image from "react-bootstrap/Image";
import Img from "../helpers/Hospital.jpg";
import Doctors from "../components/Doctors";
import NavScroll from "../components/NavScroll";


const Home = () => {
  return (
    <>
    <NavScroll/>
      <div>
        <Image src={Img} fluid />
      </div>
      <Doctors />
    </>
  );
};

export default Home;
