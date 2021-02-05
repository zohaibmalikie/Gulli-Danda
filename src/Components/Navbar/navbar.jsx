import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/img/top_logo.png'
 function navbar() {
    return (
        <React.Fragment>
<div className="pl-2 pr-5 padding-top4">
<div className="row">
    <div className="col-md-3 p-0 text-center">
        <img src={Logo} alt="There is logo" className="img-fluid w-64"/>
    </div>
    <div className="col-md-5 d-flex align-self-end text-left p-0">
<div className="col-md-3 p-0 mb-2 text-center text-uppercase">
    <NavItems name="Competitions"/>
</div>
<div className="col-md-3 p-0 mb-2 text-center text-uppercase">
<NavItems name="Winner"/>
</div>
<div className="col-md-2 p-0 mb-2 text-center text-uppercase">
<NavItems name="About"/>
</div>
<div className="col-md-3 p-0 mb-2 text-center text-uppercase ">
<NavItems name="Contact us"/>
</div>
    </div>
    <div className="col-md-4 d-flex align-self-end p-0 justify-content-end mb-1">
        <div className="col-md-8">
            <div className="row justify-content-end">

        <button type="button" className="btn bg-red-color font border-radius  ">Login</button>
        <button type="button" className="btn bg-red-color font border-radius  ml-3">Signup</button>
        </div>
            </div>
        <div className="col-md-4  h1 p-0 m-0 d-flex align-self-start justify-content-center">
            <p className="zero ">O</p>
           <i className="fa fa-shopping-cart red-color m-0" aria-hidden="true"></i>
        </div>
    </div>
</div>
</div>


        </React.Fragment>
    )
}
const NavItems =({name})=>{
    // const {name} = props;
return (<p className="font m-0"> {name}</p>)}
 

export default navbar;
export {NavItems};

