import React from "react";
import ButtonCode from "../button/ButtonCode";
import Step from "../Steps/Step";
import CarouselOwl from "../carousel/owlCarousel";
import "../assets/css/bannar.css";
import firstImage from "../assets/img/img1.png";
import secondImage from "../assets/img/img2.png";
import thirdImage from "../assets/img/img3.png";
export default function Bannar() {
  const Alert = (e) => {
    alert("Abc");
  };
  return (
    <React.Fragment>
      {/* Bannar Code */}
      <div className="background-image col-md-12 p-0 mt-5 m-0 row">
        <div className="col-md-7 m-0 pt-5"></div>
        <div className="m-0 pt-5 col-md-5 animation ">
          <span className="p-0 m-0 large-font">The</span>
          <br />
          <span className="p-0 m-0 large-font red-color">30</span>
          <br />
          <span className="p-0 m-0 large-font">Grand</span>
          <br />
          <span className="p-0 m-0 large-font">Challenge</span>
          <br />

          {/* Buttons used with Props & imported*/}
          <ButtonCode
            className="btn bg-red-color font border-radius pl-4 pr-4 pt-2 pb-2 mb-5 mt-3 btn-animation"
            name="Enter now"
            FunctionName={(e) => Alert(e)}
          />
        </div>
      </div>
      <div className="pt-3 red-color text-center f-48 font">
        <div>How Does It Works?</div>
      </div>

      {/* Step Code used with Props & imported*/}
      <div className="container-fluid row pt-5">
        <Step name="Step 1" source={firstImage} label="Choose Contest" />
        <Step name="Step 2" source={secondImage} label="Spot the ball" />
        <Step
          name="Step 3"
          source={thirdImage}
          label="Check out"
          id="border-none"
        />
        <div className="col-md-4 m-auto text-center pt-4">
          <ButtonCode
            className="btn bg-red-color font border-radius pl-5 pr-5 pt-1 pb-1 mb-5 mt-3"
            name="ENTER NOW"
            FunctionName={(e) => Alert(e)}
          />
        </div>
      </div>
      <div className="pt-3 red-color text-center f-48 font">
        <div>Weekly Winners</div>
      </div>
      <CarouselOwl/>
    </React.Fragment>
  );
}
