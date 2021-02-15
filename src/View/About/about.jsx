import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import MainHeading from "../../Components/main-bannar/MainHeading";
import Footer from "../../Components/footer/footer";
import ButtonCode from "../../Components/button/ButtonCode";

import Logo from "../../Components/assets/img/top_logo1.png";
import AboutImg from "../../Components/assets/img/xSuAkV.jpg";
// import AboutImg from "../../Components/assets/img/xSuAkV.jgp";

function About() {
  return (
    <React.Fragment>
      <Navbar />
      <MainHeading
        heading="About us"
        className="bg-red-color mt-3 mb-5"
        childClass="font pt-5 pb-5 text-center h1 text-uppercase"
      />
      <div className="mr-3 ml-3 pt-5">
        <div className="row">
          <div className="col-md-8">
            <p className="text-justify font-medium h5 pr-3 pl-4 about-line-height">
              Gullidanda is the brainchild of Manjot Singh. After dropping out
              of college in his early 20s, Manjot worked for international
              organizations in London in F&B, HR and interior design, before
              coming back to India again permanently. While leaving the UK,
              Manjot saw a contest where you could win an expensive luxury car
              for a few pounds. Manjot entered the contest to win a Porsche
              911--his dream car! Although he did not win, he loved the simple
              idea of a genuine, transparent, world-class way to win big for a
              small amount of money.
            </p>
            <p className="text-justify font-medium h5 pr-3 pl-4 pt-3 about-line-height">
              This resulted in Manjot’s first skill gaming enterprise launched
              in 2013 called The Wishmasters. Although the business could not
              continue due to legalese, Manjot did not give up and is now back
              with Gullidanda.
            </p>
            <div className="col-md-4 pl-4 pb-3">
              <img src={Logo} className="img-fluid" alt="...."/>
            </div>
            <p className="text-justify font-medium h5 pr-3 pl-4 pt-3 about-line-height">
              With years of experience and a will to succeed, Gullidanda is
              starting small, but will soon expand its prize pool to over 5
              million rupees per month! Giveaways and lotteries are
              traditionally not considered to be genuine businesses due to the
              lack of transparency in the way the business functions. Gullidanda
              aspires to change that by offering a transparent, world-class
              experience that is unmatched in the industry. Aspiring to grow by
              enhanced customer trust and word of mouth, Gullidanda is the first
              skill gaming portal that puts great emphasis on transparency and
              trust--making them the building blocks of their organization.
            </p>
            <p className="text-justify font h1 pr-3 pl-4 pt-3 about-line-height red-color">
              How does this work ?
            </p>
            <p className="text-justify font-medium h5 pr-3 pl-4 pt-3 about-line-height">
              We’re glad you asked! As cricket is immensely popular in India,
              people who choose to enter a contest are shown a cricket scene
              where the ball is missing. The player analyzes the image and uses
              his skills of judgement to determine where the ball could be and
              marks the spot. Once the player has chosen the place where the
              ball should be, they can check out.
            </p>
            <p className="text-justify font-medium h5 pr-3 pl-4 pt-3 about-line-height">
              On the completion of the contest, a panel of judges who are
              experienced cricket umpires collectively judge the same scene and
              give their professional opinion of where they think the ball
              should be. The player whose mark is closest to the position chosen
              by the judges wins!
            </p>
            <p className="text-justify font h1 pr-3 pl-4 pt-3 about-line-height red-color">
              Are you ready to win ?Lets go!
            </p>

            <ButtonCode
              className="btn bg-red-color font border-radius pl-4 pr-4 pt-2 pb-2 mb-5 mt-5 ml-4"
              name="Enter Now"
            />
          </div>

          <div className="col-md-4">
            <div className="card col-md-7 m-auto p-0 border-0">
              <img
                className="card-img-top"
                src={AboutImg} 
                alt="...."
                className="img-fluid about-border-radius"
              />
              <div className="card-body text-center ">
                <h3 className="card-title red-color font m-0">Majot Singh</h3>

                <span className="font-light">Founder</span>
                <p className="font-light p-0 m-0 font-11">Gulli Danda</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default About;
