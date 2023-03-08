import React from "react";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

const Section2 = () => {
  return (
    <>
      <section id="sec2">
        <div className="container">
          <h1 className="sech2">What Is TenUp FZCO?</h1>
          <div className="row">
            <div className="col-lg-4">
              <p className="sec2p">The fastest growing & community friendly</p>

              <img className="img2" src={img2} />
            </div>

            <div className="col-lg-8">
              <p className="sec2pp">
                At lectus cras risus, praesent diam. Et, non phasellus sit quam
                maecenas pulvinar neque, pulvinar id ipsum urna et id nunc vitae
                urna. At lectus cras risus, praesent diam. Et, non phasellus sit
                quam maecenas pulvinar neque, pulvinar id ipsum urna et id nunc
                vitae urna.{" "}
              </p>

              <div className="sec2div2">
                <h1 className="sec2h1h1">
                  TenUp<br></br>
                  FZCO?
                </h1>

                <img className="img3" src={img3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
