import React from "react";
import "./featured.scss";
import man from "../../assets/mman.png";
import search from "../../assets/search.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>frelancer</i> services for your busniss
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
