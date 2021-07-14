import React from 'react';
import './links.css';


const Links = () => {
    return (
       <div className="row">
           <div className='col-md-12 justify-content-md-center p-2'>

               <div className='row justify-content-between p-2'>
                   <div id='website' onClick={() => window.open("https://mandeepstylist.com", "_blank")} className='col text-white rounded  d-flex justify-content-around align-items-center m-1 p-1 '>

                       <span className='far fa-star' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Website</p>
                       <span className=''></span>

                    </div>

                   <div id='instagram' onClick={() => window.open("https://instagram.com/mandeepstylist")} className='col text-white rounded d-flex justify-content-around align-items-center m-1 p-1 pt-2 pb-2' >

                   <span className='fab fa-instagram' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Instagram</p>
                       <span className=''></span>

                    </div>
                </div>

                <div className='row justify-content-between p-2'>
                   <div id='yelp' onClick={() => window.open("https://www.yelp.com/biz/mandeep-stylist-san-francisco-3")} className='col text-white rounded  d-flex justify-content-around align-items-center m-1 p-1 '>

                       <span className='fab fa-yelp' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Yelp</p>
                       <span className=''></span>

                    </div>

                   <div id='google' onClick={() => window.open("https://goo.gl/maps/cf89sNBwJBPyhYQG9")} className='col text-white rounded d-flex justify-content-around align-items-center m-1 p-1 pt-2 pb-2' >

                   <span className='fas fa-map-marker-alt' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Google</p>
                       <span className=''></span>

                    </div>
                </div>

                <div className='row justify-content-between p-2'>
                   <div id='venmo' onClick={() => window.open("https://venmo.com/mandeepshoker")} className='col text-white rounded  d-flex justify-content-around align-items-center m-1 p-1 '>

                       <span className='fas fa-dollar-sign' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Venmo</p>
                       <span className=''></span>

                    </div>

                   <div id='email' onClick={() => window.open("mailto: mandeepstylist@gmail.com")} className='col text-white rounded d-flex justify-content-around align-items-center m-1 p-1 pt-2 pb-2' >

                   <span className='far fa-envelope' style={{fontSize: '40px'}}></span>
                       <p className='pt-3' style={{fontSize: '25px'}}>Email</p>
                       <span className=''></span>

                    </div>
                </div>

               
           </div>
       </div>
    )
}

export default Links;