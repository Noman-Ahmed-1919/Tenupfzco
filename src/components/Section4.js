import React  from "react";
import company1 from "../images/company1.png";
import company2 from "../images/company2.png";
import company3 from "../images/company3.png";
import company4 from "../images/company4.png";



const Section4 = ()=>{
    return(
        <>

        <div className="sec4part">
        <h1 className="sec4h1">Our Projects</h1>
            <p className="sec4p">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque</p>
        </div>

        <section id="sec4">
        
        <div className="container">
     
            <div className="row">
                <div className="col-lg-12" id="flex">

<div className="comgape">
<img src={company1}/>
</div>

<div  className="comgape">
<img src={company2}/>
</div>

<div  className="comgape">
<img src={company3}/>
</div>

<div  className="comgape">
<img src={company4}/>
</div>

<div  className="comgape">
<img src={company1}/>
</div>


                </div>

            </div>

        </div>


<div className="divv">
    
</div>
        </section>
        </>
    )
}

export default Section4;