import React from "react";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";
import man4 from "../images/man4.png";

const Section6 = () => {
  return (
    <>
      <section id="sec6">
        <div className="container">
          <h1 className="sec6h1">Our Team</h1>
          <p className="sec6p">
            At lectus cras risus, praesent diam. Et, non phasellus sit quam
            maecenas pulvinar neque
          </p>
          <div className="row">

            <div className="col-lg-3">
              <img style={{width:"100%"}} src={man1} />

              <h4 className="divh1">Yong Ma</h4>
              <h4 className="divp">Product Manager</h4>
            </div>

            <div className="col-lg-3" id="mangap">
              <img style={{width:"100%"}} src={man2} />

              <h4 className="divh1">Suzanne Fiore</h4>
              <h4 className="divp">Analyst</h4>
            </div>

            <div className="col-lg-3" id="tablet">
              <img style={{width:"100%"}} src={man3} />

              <h4 className="divh1">Jacob Weberman</h4>
              <h4 className="divp">Marketing Officer</h4>
            </div>

            <div className="col-lg-3" id="mangap">
              <img style={{width:"100%"}} src={man4} />

              <h4 className="divh1">Loki Thorloki</h4>
              <h4 className="divp">Technology Officer</h4>
            </div>




          </div>
        </div>
      </section>
    </>
  );
};

export default Section6;
