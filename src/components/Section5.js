import React from "react";
import smman from "../images/man.png";

import right from "../images/right.png";
import left from "../images/left.png";

const Section5 = () => {
  return (
    <>
      <div id="sec5part1">
        <h1 className="sec5h1">Our Testimonial</h1>
        <p className="sec5p">
          At lectus cras risus, praesent diam. Et, non phasellus sit quam
          maecenas pulvinar neque
        </p>
      </div>

      <section id="sec5">
        <div className="container">
          <div className="row" id="back">
            <div className="col-12">
              <h1 className="sec5h1h1h1">What our client says</h1>

              <p className="sec5pppp">
                Superb quality and response. Glad to know Rewang, it’s filled
                with the most talented people in its field.
              </p>

              <p className="sec5keep">Keep up the good work!</p>


<div id="twobtn">


              <div className="man">
                <div>
                  <img src={smman} />
                </div>

                <div>
                  <h6 className="amen">Amet minim</h6>
                  <p className="amenp">Product designer at Simmerly</p>
                </div>
              </div>



<div className="round">

<div>
<img className="left" src={left} />
</div>

<div className="blue">
<img src={right} />
</div>

</div>

</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
