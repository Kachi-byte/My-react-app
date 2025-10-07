import React from "react";
import "./SimpleSip.css";
import soda1 from "./images/soda1.jpg";
import soda2 from "./images/soda2.jpg";
import soda3 from "./images/soda3.jpg";
import soda4 from "./images/soda4.jpg";
import soda5 from "./images/soda5.jpg";
import soda6 from "./images/soda6.jpg";
import soda7 from "./images/soda7.jpg";
import soda8 from "./images/soda8.jpg";
import soda9 from "./images/soda9.jpg";
import "@fontsource/poppins/900-italic.css";
import "@fontsource/poppins/200.css";

const SimpleSipHome = () => {
  return (
    <div className="head">
      <div className="header-intro">
        <div className="introtext">
          <h1>Sophisticated Sips,Crafted to refresh</h1>
          <p>
            Explore cold-pressed Juice,Botanical sodas and traditional
            tea.Thoughtfully sourced ingredients for a clean modern taste <br />
            <button className="shop">Shop Now</button>
          </p>
        </div>
        <div className="soda">
          <img
            src={soda3}
            alt="soda"
            style={{
              width: "550px",
              height: "400px",
              borderRadius: "40px",
            }}
          />
        </div>
      </div>
      <div className="little-info">
        <span className="fd">
          <h1>FEATURED DRINKS</h1>
          <p>Our most loved sections this week</p>
        </span>
        <span className="sp">
          <button className="filt">filter</button>
        </span>
      </div>
      <div className="drinks-section1">
        <div className="soda2">
          <img
            src={soda2}
            alt="soda2"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas"
          />
          <h3>Chilled beer </h3>
          <div className="price-row4">
            <span>$5.23</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda6">
          <img
            src={soda6}
            alt="soda6"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas"
          />
          <h3>Vodka </h3>
          <div className="price-row2">
            <span>$19.56</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda9">
          <img
            src={soda9}
            alt="soda9"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas"
          />
          <h3>Fanta</h3>
          <div className="price-row3">
            <span>$3.40</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda5">
          <img
            src={soda5}
            alt="soda5"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas"
          />
          <h3>Cock tail </h3>
          <div className="price-row1">
            <span>$7.00</span> <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="drinks-section2">
        <div className="soda1">
          <img
            src={soda1}
            alt="soda1"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas2"
          />
          <h3>Red Wine </h3>
          <div className="price-row5">
            <span>$15.23</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda4">
          <img
            src={soda4}
            alt="soda4"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas2"
          />
          <h3>Coffee </h3>
          <div className="price-row6">
            <span>$2.00</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda7">
          <img
            src={soda7}
            alt="soda7"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas2"
          />
          <h3>Herbal Tea</h3>
          <div className="price-row7">
            <span>$2.40</span> <button>Add to cart</button>
          </div>
        </div>
        <div className="soda8">
          <img
            src={soda8}
            alt="soda8"
            style={{
              width: "280px",
              height: "200px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            className="sodas2"
          />
          <h3>Latte</h3>
          <div className="price-row8">
            <span>$1.99</span> <button>Add to cart</button>
          </div>
        </div>
      </div>
      <br />
      <div className="about">
        <h3>About SimpleSip</h3>
        <p>
          We craft Beverages with simple ingredients and elevated states.No
          artificial Flavours,Clarity and quality in every sip.
        </p>
      </div>
      <br />
      <br />
      <hr />
      <div className="copyrights">
        <div className="reserved">
          &copy; 2025 SimpleSip. All Rights reserved
        </div>
        <div className="terms">
          <a href="#w">Privacy</a>
          <a href="#w">Terms</a>
          <a href="#w">Support</a>
        </div>
      </div>
    </div>
  );
};

export default SimpleSipHome;
