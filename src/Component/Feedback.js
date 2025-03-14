import React from "react";
import "./style.css";
import burger56 from "../Assent/burger56.png";
import burger60 from "../Assent/burger60.png";
import burger61 from "../Assent/burger61.png";
import Free from "../Assent/Free.png";
import Chocolate from "../Assent/Chocolate.png";
import french from "../Assent/french.png";
import top from "../Assent/top.png";
import we from "../Assent/we.avif";
// import cofee from "../Assent/cofee.jpg";

export default function Feedback() {
  return (
    <div>
      <div className="fries">
        <div className="free_fries py-5">
          <div className="free_img">
            <img src={Free} className="free" />
          </div>
          <div className="free_text ms-3">
            <h2>Sign up. Eat up. Free Fries on us!</h2>
            <p>
              Join hajurah Rewards and score FREE fries with your first
              <br />
              purchase! What are you waiting for?
            </p>
            <button>SIGN UP</button>
            <button className="secord-buttom ms-3">LEARN MORE</button>
          </div>
        </div>
      </div>
      {/* <h2>MENU</h2> */}
      <div className="body-img">
        <img src={burger56} className="ma" />
         <button>HAJURA`SBURGER</button> 
        <img src={burger60} className="mar" />
         <button>CHICKEN</button> 
        <img src={burger61} className="ar" />
         <button>VIGGE</button> 
      </div>
      <div className="secord-img">
        <img src={top} className="se" />
         <button>SIDES</button> 
        <img src={french} className="secord" />
         <button>KIDS MEALS</button> 
        <img src={Chocolate} className="cord" />
         <button>HAND-SPUN SHAKES</button> 
      </div>
      <div className="spun">
        <div className="d-flex justify-content-center align-items-center mt-3 w-100 py-5 img">
          <img src={we} className="img" />
          <h5 className="text2">
            <h4 className="text">We Take pride in our craft</h4>
            Our made-to-order burgers are built differently. Using our signature
            proprietary burger smasher, our culinary masters utilize a special
            smashing technique to create a mouthwatering caramelized, crispy
            sear that seals in all the juicy goodness within.
            <br /> <br/>Our passion for culinary innovation drives us to continuously
            experiment with thousands of ingredient combinations until we
            achieve the perfect recipe. We use only the finest, high-quality
            ingredients, each one meticulously selected for maximum flavor
            impact, including our custom burger spice blend, carefully curated
            to add a distinctive, bold flavor to every bite
          </h5>
        </div>
      </div>
    </div>
  );
}
