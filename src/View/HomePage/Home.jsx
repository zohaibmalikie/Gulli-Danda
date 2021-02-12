import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Bannar from "../../Components/main-bannar/bannar";
import Footer from "../../Components/footer/footer";
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
