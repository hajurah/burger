import React from 'react'
import "./style.css";
import burger53 from "../Assent/burger53.png";
import burger51 from "../Assent/burger51.png";
import burger50 from "../Assent/burger50.png";
// import cofee from "../Assent/cofee.jpg";


export default function Feedback() {
  return (
    <div>
      <div className="body">
        <div className="secord-body">
          <div className="body-text">
            <h2>Sign up. Eat up. Free Fries on us!</h2>
            <p>
              Join hajurah Rewards and score FREE fries with your first purchase!
              What are you waiting for?
            </p>
            <button>SIGN UP</button>
            <button className="secord-buttom">LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="body-img">
         <img src={burger53} />
        <img src={burger51} /> 
        <img src={burger50} />
      </div>
      <div className="secord-img">
                {/* <img src={cofee} /> */}
      </div>
    </div>
  );
}
