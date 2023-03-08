import React from "react";
import logo from "../images/logo.png";


const Header = () => {
    return(
        <>
        
        <section  id='hide' className='container'>

<nav className="navbar navbar-expand-lg navbar-light"  >

  <a className="navbar-brand" href="#" id="stico" style={{ color: "white", textShadow: "2px 2px 0px rgba(0, 0, 0, 0.7)" }}>
    <img id='logo' src={logo} width={150} height={40} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="headerrnava" >
      <li className="nav-item active">
        <a to="/"   id="abouta" style={{  color: "#0938C2", fontWeight:"700" }} className="nav-link font" >
             Products
        </a>
      </li>
      <li className="nav-item">
        <a to="/Stico"  id="abouta" style={{ color: "#0938C2", fontWeight:"700"  }} className="nav-link" >   Services</a>
      </li>
      <li className="nav-item">
        <a  id="abouta" style={{ color: "#0938C2", fontWeight:"700"  }} className="nav-link" href="#roadmap"> Pricing</a>
      </li>
      <li className="nav-item">
        <a  id="abouta" style={{ color: "#0938C2", fontWeight:"700"  }} className="nav-link" href="#utility">  Contact Us</a>
      </li>

      
      {/* <li className="nav-item" id="discord">
      <a style={{color: '#A3D1E0', marginLeft: '219px'}} className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">DISCORD</a>
    </li> */}
    </ul>
    <div id="btnnns">

    <div>
    <a id="btn1header1"  className=" my-2 my-sm-0" > Sign In</a>
    </div>

    <div>
    <a id="btn1header2"  className=" my-2 my-sm-0" > Get Started</a>
    </div>
    
    </div>
  </div>
</nav>

</section>
 



        
        </>
    )
}

export default Header;