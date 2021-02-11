import React from "react";
import FooterImg from "../assets/img/white_logo.png";
function footer() {
  return (
    <React.Fragment>
      <div>
        <div className="row bg-dark pl-3 pb-2 pt-4  mt-5">
          <div className="col-md-6">
            <img src={FooterImg} alt="" className="img-fluid w-50" />
          </div>
          <div className="col-md-4 font-medium h3 pt-2">
            <a href="http://" className="D6E2F3">
              Terms & Conditions
            </a>
            <br />
            <a href="http://" className="D6E2F3">
              Privacy Policy
            </a>
            <br />
            <a href="http://" className="D6E2F3">
              Winners
            </a>
            <br />
            <a href="http://" className="D6E2F3">
              FAQ
            </a>
            <br />
            <a href="http://" className="D6E2F3">
              Contact Us
            </a>
          </div>
          <div className="col-md-2 d-flex align-self-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="D6E2F3 h1 pr-2"
            >
              <i class="fa fa-facebook-square"></i>{" "}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="D6E2F3 h1 pr-2"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="D6E2F3 h1"
            >
              <i class="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
        <div className="text-center">
            <h2 className="pt-4 pb-3 font font-medium">
            All Rights Reserved Gulli Danda 2020
            </h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default footer;
