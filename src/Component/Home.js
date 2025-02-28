import React from "react";
import "./style.css";
import burger45 from "../Assent/burger45.png";

import {} from "reactstrap";
export default function Home() {
  return (
    <>
      <div>
        <div className="order">
          <div className="header">
            <h4 className="choose">Choose a location to order</h4>
            <div className="header-end">
              <button className="now">ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 w-100">
          <div className="home-text">
            <h1>
              Meticulously Crafted To Be
              <span> DESTROYED</span>
            </h1>
            <button>ORDER NOW</button>
          </div>
          <img src={burger45} />
        </div>
      </div>
    </>
  );
}
