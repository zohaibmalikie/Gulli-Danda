import React from "react";
import "../assets/css/navbar.css";
import ButtonCode from "../button/ButtonCode";
import Logo from "../assets/img/top_logo1.png";



function navbar() {
  return (
    <React.Fragment>
      <div className="pl-1 pr-5 padding-top4">
        <div className="row">
          <div className="col-md-3 p-0 text-center">
            <img src={Logo} alt="There is logo" className="img-fluid" />
          </div>
          <div className="col-md-5 d-flex align-self-end text-left p-0 pb-2">
            <div className="col-md-3 p-0 mb-2 text-center text-uppercase">

               {/* NavItems used with Props & imported*/}
              <NavItems  name="Competitions" />
            </div>
              <div className="col-md-3 p-0 mb-2 text-center text-uppercase">
              <NavItems   name="Winner" />
            </div>
            <div className="col-md-2 p-0 mb-2 text-center text-uppercase">
              <NavItems  name="About" />
            </div>
            <div className="col-md-3 p-0 mb-2 text-center text-uppercase">
              <NavItems  name="Contact us" />
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-end p-0 justify-content-end mb-1 pb-2">
            <div className="col-md-8">
              <div className="row justify-content-end">
                 {/* Buttons used with Props & imported*/}
              <ButtonCode className="btn bg-red-color font border-radius"name="Login"/>
              <ButtonCode className="btn bg-red-color font border-radius  ml-3"name="Signin"/>
              </div>
            </div>
            <div className="col-md-4  h1 p-0 m-0 d-flex align-self-start justify-content-center">
              <p className="zero ">O</p>
              <i className="fa fa-shopping-cart red-color m-0"aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


const NavItems = ({ name }) => {
  // const {name} = props;
  return <p className="animateOnclick font m-0 hover-red animate__animated" id=""> {name}</p>;
};
export default navbar;

