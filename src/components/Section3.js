import React  from "react";
import wallet from "../images/wallet.png"
import laptop from "../images/Laptop.png"
import chain from "../images/chain.png"
import hand from "../images/hand.png"
import machine from "../images/machine.png"
import metaverse from "../images/metaverse.png"

const Section3 = ()=>{
    return(
        <>
        <section id="sec3">

        <div className="container">
            <h1 className="sec3h1">Main Services</h1>
            <p className="sec3p">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque</p>
            <div className="row">

                <div className="col-lg-6" id="samsung">

<div className="step1">

    <div>
        <img style={{width:"100%"}} src={wallet}/>
    </div>

    <div className="h4p">
        <h4>1. Wallet Integration</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>


<div className="step2">

    <div>
        <img style={{width:"100%"}} src={laptop}/>
    </div>

    <div className="h4p">
        <h4>3. Dapps Development</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>



<div className="step3">

    <div>
        <img style={{width:"100%"}} src={chain}/>
    </div>

    <div className="h4p">
        <h4>5. Block Chain Consulting</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>

                </div>






                <div className="col-lg-6" id="samsung">

<div className="step1">

    <div>
        <img style={{width:"100%"}} src={hand}/>
    </div>

    <div className="h4p">
        <h4>2. ETH Token Development</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>


<div className="step2">

    <div>
        <img style={{width:"100%"}} src={machine}/>
    </div>

    <div className="h4p">
        <h4>4. Solidity Development</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>



<div className="step3">

    <div>
        <img style={{width:"100%"}} src={metaverse}/>
    </div>

    <div className="h4p">
        <h4>6. NFT Development</h4>
        <p className="ph4">At lectus cras risus, praesent diam. Et, non phasellus sit quam maecenas pulvinar neque.</p>
    </div>

</div>

                </div>

            </div>

        </div>
        

        </section>
        </>
    )
}

export default Section3;