import React from "react";
import fotlogo from "../images/fotlogo1.png";
import insta from "../images/insta1.png";
import discord from "../images/discord.png";
import twiter from "../images/twiter.png";

const Section7 = () =>{
    return(
        <>
        
        <section id="sec7">

<div className="container" id="sec7small">
    <div className="row">
        <div className="col-lg-4" id="gape">

            <img src={fotlogo} />

            <div className="ul">
                <p>Pakistan</p>
                <p>Jl. kemerdekaan no. 4, DHA 1.</p>
            </div>

<div className="smimages" >
    <img className="twitter" src={twiter}/>
    <img className="discord"  src={discord}/>
    <img className="insta"  src={insta}/>
</div>

        </div>


        <div className="col-lg-4" id="whitefot">
            <h4>Home</h4>

            
                <p>Products</p>
                <p>Service</p>
                <p>Pricing</p>
                <p>Contact Us</p>
            

        </div>


        
        <div className="col-lg-4" id="whitefo">
            <h4>What we do </h4>

            
                <p>Company</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
                <p>About Us</p>
                <p>Disclaimer</p>
    

        </div>

    </div>

</div>

        </section>
        
        <div className="container footerp">
        <p className="">© Jiko 2021. All Right Reserved </p>
        </div>
        
        </>
    )
}

export default Section7;