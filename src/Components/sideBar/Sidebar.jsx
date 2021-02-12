import React from "react";
import "../assets/css/sidebar.css";
function Sidebar() {
  //   function openNav() {
  //     document.getElementById("mySidenav").style.width = "250px";
  //   }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    let x = document.getElementById("positionAb");
    x.style.width = "0%";
  }
  return (
    <React.Fragment>
      <div id="outerDiv" className="outerdiv">
        <div id="mySidenav" className="sidenav">
          <div className="row border-bottom pb-2 align-self-center">
            <div className="col-md-8 font-medium h5 d-flex align-self-end pl-5">
              Cart:
            </div>
            <div className="col-md-4">
              <a
                href="javascript:void(0)"
                className="closebtn p-0 text-right pr-5"
                onClick={() => closeNav()}
              >
                &times;
              </a>
            </div>
          </div>
          <div className="row pt-4 align-self-center">
            <div className="col-md-8 font-light h6 d-flex align-self-end pl-5">
              Sub Total:
            </div>
            <div className="col-md-4 text-center pr-4 font">$ 0</div>
          </div>
          <div className="row pt-5 align-self-center">
            <div className="col-md-8 font-light h6 d-flex align-self-end pl-5">
              total:
            </div>
            <div className="col-md-4 text-center pr-4 font">$ 0</div>
          </div>

          <div className="row pl-5 pr-5 mt-4">
            <div className="col-md-12 font-light">
              <button
                type="button"
                class="btn btn-light w-100 contact-input font-14 p-2 cart-button"
              >
           
                <i
                  className="fa fa-shopping-cart font-14 m-0"
                  aria-hidden="true"
                ></i> &nbsp;
                VIEW CART
              </button>
            </div>
          </div>
          <div className="row pl-5 pr-5 mt-3">
            <div className="col-md-12 font-light">
              <button
                type="button"
                class="btn btn-light w-100 contact-input font-14 p-2 cart-button"
              >
           
                <i
                  className="fa fa-sign-in font-14 m-0"
                  aria-hidden="true"
                ></i> &nbsp;
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
