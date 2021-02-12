import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import MainHeading from "../../Components/main-bannar/MainHeading";
import ButtonCode from "../../Components/button/ButtonCode";
import Footer from "../../Components/footer/footer";

function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <MainHeading
        heading="Contact us"
        className="bg-red-color mt-3 mb-5"
        childClass="font pt-5 pb-5 text-center h1 text-uppercase"
      />
      <div className="google-map-code ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          height="450px"
          aria-hidden="false"
          className="w-100 border"
        ></iframe>
      </div>
      <div className="row ml-4 mr-3 mt-3">
        <div className="col-md-6 font-light pt-5 text-justify">
          <p className="h4">Contact Us</p>
          <p className="font-14 about-line-height24  pb-4 pt-3">
            We welcome your feedback, so if you have any suggestions or comments
            please send them to us using the comments box below. Alternatively,
            please don't hesitate to email us to <b>care@gullidanda.in. </b> Our
            head office in Mumbai, India.
          </p>
          <p className="font-14 about-line-height24  pb-3">
            <i className="fa fa-fax"></i>&nbsp; Address : "Clay" House
            #731,Pinto Heritage Villa,Near St.Anthony's Chapel, Anjuna,Goa
            -403509
          </p>
          <p className="font-14 about-line-height24 pb-3">
            <i className="fa  fa-envelope-o"></i>&nbsp;&nbsp; care@gullidanda.in
          </p>
        </div>
        <div className="col-md-6 font-light pt-5 pl-5 text-justify">
          <p className="h4">Send Message</p>
          <div className=" mt-4">
            <label htmlFor="basic-url">Your Name (required)</label>
          </div>
          <div className="input-group  pb-2">
            <input
              type="text"
              className="form-control border mt-2 w-100 contact-input p-3 font-14"
              aria-describedby="basic-addon3"
              placeholder="Name*"
              required
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="basic-url">Your Email (required)</label>
          </div>
          <div className="input-group  pb-2">
            <input
              type="email"
              className="form-control border mt-2 w-100 contact-input p-3 font-14"
              aria-describedby="basic-addon3"
              placeholder="Email*"
              required
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="basic-url">Subject</label>
          </div>
          <div className="input-group  pb-2">
            <input
              type="text"
              className="form-control border mt-2 w-100 contact-input p-3 font-14"
              aria-describedby="basic-addon3"
              placeholder="Subject*"
              required
            />
          </div>
          <div className=" mt-4">
            <label htmlFor="basic-url">Your Message</label>
          </div>
          <div className="input-group">
            <textarea
              name="Message*"
              placeholder="Message*"
              id=""
              cols="20"
              rows="8"
              className="pl-2 pt-2 mt-2 w-100 contact-input border"
            ></textarea>
          </div>
          <ButtonCode
            name="Send"
            className="bg-dark font-light text-white pl-4 pr-4 pt-2 pb-2 rounded border-0 mb-5 mt-4"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
