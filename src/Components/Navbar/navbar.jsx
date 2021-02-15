import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import ButtonCode from '../button/ButtonCode'
import Sidebar from '../sideBar/Sidebar'
import Logo from '../assets/img/top_logo1.png'

function navbar() {
  function openNav() {
    let w = document.getElementById('mySidenav')
    w.style.width = '370px'
    w.style.zIndex = '30'
    let x = document.getElementById('positionAb')
    x.style.width = '100%'
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */

  return (
    <React.Fragment>
      <div
        id="positionAb"
        style={{
          backgroundColor: 'grey',
          opacity: '0.5',
          width: '0%',
          height: '100%',
          position: 'absolute',
          zIndex: 25,
        }}
      ></div>
      <div className="pl-1 pr-5 padding-top4">
        <div className="row">
          <div className="col-md-3 p-0 text-center">
            <Link to="/">
            <img src={Logo}  className="img-fluid" alt="...."/>
            </Link>
          </div>
          <div className="col-md-5 d-flex align-self-end text-left p-0 pb-2">
            <div className="col-md-3 p-0 mb-2 text-center text-uppercase">
              {/* NavItems used with Props & imported*/}
              <Link to="/compitition">
                <NavItems name="Competitions" />
              </Link>
            </div>
            <div className="col-md-3 p-0 mb-2 text-center text-uppercase">
              <Link to="/winner">
                <NavItems name="Winner" />
              </Link>
            </div>
            <div className="col-md-2 p-0 mb-2 text-center text-uppercase">
              <Link to="/about">
                <NavItems name="About" />
              </Link>
            </div>
            <div className="col-md-3 p-0 mb-2 text-center text-uppercase">
              <Link to="/contact">
                <NavItems name="Contact us" />
              </Link>
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-end p-0 justify-content-end mb-1 pb-2">
            <div className="col-md-8">
              <div className="row justify-content-end">
                {/* Buttons used with Props & imported*/}
                <Link to="/login">
                <ButtonCode
                  className="btn bg-red-color font border-radius"
                  name="Login"
                />
                </Link>
                <Link to="/signup">
              
                <ButtonCode
                  className="btn bg-red-color font border-radius  ml-3"
                  name="Signin"
                  />
                  </Link>
              </div>
            </div>
            <Sidebar />
            <div
              className="col-md-4  h1 p-0 m-0 d-flex align-self-start justify-content-center"
              onClick={() => openNav()}
            >
              <p className="zero ">O</p>
              <i
                className="fa fa-shopping-cart red-color m-0"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const NavItems = ({ name }) => {
  // const {name} = props;
  return (
    <p className="animateOnclick font m-0 hover-red animate__animated" id="">
      {' '}
      {name}
    </p>
  )
}
export default navbar
