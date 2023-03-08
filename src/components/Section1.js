import React from "react";
import img1 from "../images/img1.png";

const Section1 = () => {
  return (
    <>
      <section id="sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="img1" src={img1} />
            </div>

            <div className="col-lg-6" id="secpadding">
              <h1 className="sec1h1">
                The easiest way to develop Dapps and NFTs
              </h1>

              <p className="sec1p">Building Decentralized Apps</p>

              <div className="butns">
                <div>
                  <button className="btn1">Get Started</button>
                </div>

                <div>
                  <button className="btn2">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
