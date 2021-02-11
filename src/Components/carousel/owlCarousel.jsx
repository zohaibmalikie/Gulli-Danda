import React from "react";

import Card1 from "../assets/img/xSuAkV.jpg";
import "../assets/css/carousel.css";

function owlCarousel() {
  // $(".card-deck").owlCarousel({
  //   loop: true,
  //   autoplay: true,
  // });
  return (
    <React.Fragment>
      <div className="row pl-5 pt-4 ">
        {/* card one */}
        <div className="col-md-4 card-deck">
          <div className="card  width">
            <img className="card-img-top" src={Card1} alt="Card image cap" />
            <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3">
                <h5 className="font mb-3">Name is here</h5>

                <span className="font-weight-light h5 mt-4">
                  Winner 50000/-
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="col-md-4 card-deck">
          <div className="card  width">
            <img className="card-img-top" src={Card1} alt="Card image cap" />
             <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3">
                <h5 className="font mb-3">Name is here</h5>

                <span className="font-weight-light h5 mt-4">
                  Winner 50000/-
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="col-md-4 card-deck">
          <div className="card width">
            <img className="card-img-top" src={Card1} alt="Card image cap" />
             <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3">
                <h5 className="font mb-3">Name is here</h5>

                <span className="font-weight-light h5 mt-4">
                  Winner 50000/-
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default owlCarousel;
