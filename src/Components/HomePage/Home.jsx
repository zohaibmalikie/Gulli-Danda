import React from "react";
import Navbar from "../Navbar/navbar";
import Bannar from "../main-bannar/bannar";
import Footer from "../footer/footer";
function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Bannar />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
