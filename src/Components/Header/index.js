import React from 'react';
import LogoOnly from '../../images/logoOnly.png';
// import './header.css';


const Header = () => {
    return (
       <div className="row justify-content-md-center ">
           <div className='col-md-12 text-center pt-3 pb-2'>
               <img id='logo' src={LogoOnly} alt='Logo for Mandeep Stylist' width='15%'/>
               <p id='title' className='' style={{fontFamily: 'Poiret One', fontSize: '40px'}}>Mandeep Stylist</p>
           </div>
       </div>
    )
}

export default Header;