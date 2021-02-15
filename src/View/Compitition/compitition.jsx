import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/footer/footer";
import MainHeading from "../../Components/main-bannar/MainHeading";
import Button from "../../Components/button/ButtonCode";
import CompiImg from "../../Components/assets/img/1605791497614_cash prize 30000.jpg";

function Compitition() {
  return (
    <React.Fragment>
      <Navbar />
      <MainHeading heading="COMPETITIONS" className="bg-red-color mt-3 mb-5" childClass="font pt-5 pb-5 text-center h1 text-uppercase" />
      <div className="container-fluid pl-5 flex-nowrap">
        <Button
          name="BIG 30"
          className="bg-red-color font-medium  h3 border-0 w-33 pt-2 pb-2 m-0 mt-5"
        />
        <br />
        <img src={CompiImg}  className="w-33" alt="...."/>
        <br />
        <Button
          name="Play now"
          className="bg-red-color font-medium  h3 border-0 w-33 pt-2 pb-2 mb-5"
        />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Compitition;
