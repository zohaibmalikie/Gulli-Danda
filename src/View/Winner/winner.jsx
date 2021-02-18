import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import MainHeading from "../../Components/main-bannar/MainHeading";
import Footer from "../../Components/footer/footer";
import WinImg1 from "../../Components/assets/img/1603607405926__MG_1983.jpg";
import WinImg2 from "../../Components/assets/img/1602771092342_284967.4-3-1.jpg";
function Winner() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-winner-img mt-3">
        <MainHeading
          heading="WINNERS"
          className=" pt-5 pb-5"
          childClass="font-medium pt-5 pb-5 mt-5 text-center text-white display-2 text-uppercase"
        />
      </div>
      <div className="mt-5 row ml-3">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body p-0 m-0">
              <p className="card-text text-white bg-red-color pt-2 pb-2 pl-3">
                <h5 className="font m-0">Naina Gowda</h5>
              </p>
            </div>
            <img className="card-img-top m-0 p-0 height-winner" src={WinImg1} alt="...."/>
            <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3 d-flex justify-content-between">
                <span className="font-weight-light text-left pl-2">2020-10-16</span>

                <span className="font h5 pr-2">
                View Full Result
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body p-0 m-0">
              <p className="card-text text-white bg-red-color pt-2 pb-2 pl-3">
                <h5 className="font m-0">Naina Gowda</h5>
              </p>
            </div>
            <img className="card-img-top m-0 p-0 height-winner" src={WinImg2} alt="...."/>
            <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3 d-flex justify-content-between">
                <span className="font-weight-light text-left pl-2">2020-10-16</span>

                <span className="font h5 pr-2">
                View Full Result
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body p-0 m-0">
              <p className="card-text text-white bg-red-color pt-2 pb-2 pl-3">
                <h5 className="font m-0">Naina Gowda</h5>
              </p>
            </div>
            <img className="card-img-top m-0 p-0 height-winner" src={WinImg1} alt="...."/>
            <div className="card-body p-0 m-0">
              <p className="card-text text-center text-white bg-red-color pt-3 pb-3 d-flex justify-content-between">
                <span className="font-weight-light text-left pl-2">2020-10-16</span>

                <span className="font h5 pr-2">
                View Full Result
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Winner;
