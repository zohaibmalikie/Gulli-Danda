import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import MainHeading from '../../Components/main-bannar/MainHeading'
import Button from '../../Components/button/ButtonCode'
import Footer from '../../Components/footer/footer'

function Login() {
  return (
    <React.Fragment>
      <Navbar />
      <MainHeading
        heading="Login"
        className="bg-red-color mt-3 mb-5"
        childClass="font pt-5 pb-5 text-center h1 text-uppercase"
      />
      <div className="row justify-content-center">
        <Button
          icons={<i className="fa fa-facebook-official">&nbsp;</i>}
          name=" LOGIN WITH USER"
          className=" font-light font-11 border-0 pl-4 pr-4 pt-2 pb-2 login-border-radius light-blue text-white mr-4"
        />
        <Button
          icons={<i className="fa fa-google">&nbsp;</i>}
          name=" LOGIN WITH GMAIL"
          className="bg-red-color font-light font-11 border-0 pl-4 pr-4 pt-2 pb-2 login-border-radius light-blue text-white"
        />
      </div>
      <div className="row justify-content-center">
        <p className="font-light mt-3">OR</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 border p-4 pb-5 rounded">
          <div>
            <label className="font-light font-14">Username or email*</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>
          </div>
          <div>
            <label className="font-light font-14">Password*</label>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </div>
          </div>
          <div className="d-flex mt-4 justify-content-between">
            <div className="font-14 ">Lost your password?</div>
            <div className="text-end">
              <Button
                name="Login"
                className=" font-light font-14 border-0 pl-3 pr-3 pt-1 pb-1 login-border-radius bg-red-color text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Login
