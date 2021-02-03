import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/img/top_logo.png'
 function navbar() {
    return (
        <React.Fragment>
<div className="pl-3 pr-5 pt-4">
<div className="row">
    <div className="col-md-3 p-0 text-center">
        <img src={Logo} alt="There is logo" className="img-fluid w-75"/>
    </div>
    <div className="col-md-5 d-flex align-self-end p-0">
<div className="col-md-3 p-0 mb-1 text-center text-uppercase">
    <NavItems name="Component"/>
</div>
<div className="col-md-3 p-0 mb-1 text-center text-uppercase">
<NavItems name="Winner"/>
</div>
<div className="col-md-3 p-0 mb-1 text-center text-uppercase">
<NavItems name="About"/>
</div>
<div className="col-md-3 p-0 mb-1 text-center text-uppercase ">
<NavItems name="Contact us"/>
</div>
    </div>
    <div className="col-md-4 d-flex align-self-end p-0 justify-content-end mb-1">
        <div className="col-md-3">
        <button type="button" class="btn btn-danger font border-radius  ">Login</button>
        </div>
        <div className="col-md-3">
        <button type="button" class="btn btn-danger font border-radius  ml-3">Signup</button>
        </div>
        <div className="col-md-3 text-right h1 p-0 m-0">
           <i class="fa fa-shopping-cart text-danger m-0" aria-hidden="true"></i>
        </div>
    </div>
</div>
</div>


        </React.Fragment>
    )
}
const NavItems =({name})=>{
    // const {name} = props;
return (<p className="font"> {name}</p>)}


export default navbar;
export {NavItems};

