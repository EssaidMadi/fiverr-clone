import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide />
    </div>
  );
};

export default Home;
