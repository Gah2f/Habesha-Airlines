import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    const backHandler = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    }
  return (
    <div className='footer'>
       
        <div className="footer__top">
            <Link to="/">
           <button className='back-to-top' onClick={backHandler}> Back to top </button>
            </Link>
        </div>
     
        <div className="footer__middle">
            <div className="footer__middle__1">
                <h4><b>Get to Know Us</b></h4>
             
                <ul>
               <li><a href="">Careers</a></li> 
               <li><a href="">Blog</a></li> 
                <li><a href="">About Habesha</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Habesha Devices</a></li>
               <li><a href="">Habehsa Science</a></li> 
                </ul>
            
            </div>
            <div className="footer__middle__2">
            <h4><b>Make Money with Us</b></h4>
            
                <ul>
                <li><a href="">Sell products on Habesha</a></li>
               <li><a href="">Sell on Habesha Business</a></li> 
                <li><a href="">Sell apps on Habesha</a></li>
                <li><a href="">Become an Affiliate</a></li>
                <li><a href="">Advertise Your Products</a></li>
               <li><a href="">Self-Publish with Us</a></li> 
               <li><a href="">Host an Habesha Hub</a></li> 
               <li><a href="">See More Make Money with Us
               </a></li> 
                </ul>
           
            </div>
            <div className="footer__middle__3">
            <h4><b>Habesha Payment Products</b></h4>
             
                <ul>
               <li><a href="">Habesha Business Card</a></li> 
                <li><a href="">Shop with Points</a></li>
                <li><a href="">Reload Your Balance</a></li>
               <li><a href="">Habesha Currency Converter</a></li> 
                </ul>
             
            </div>
            <div className="footer__middle__4">
            <h4><b>Let Us Help You</b> </h4>
            
                <ul>
               <li><a href="">Habesha and COVID-19</a></li> 
                <li><a href="">Your Account</a></li>
               <li><a href="">Your Orders</a></li> 
               <li><a href="">Shipping Rates & Policies</a></li> 
               <li><a href="">Returns & Replacements</a></li> 
              <li><a href="">Manage Your Content and Devices</a></li>  
               <li><a href="">Help</a></li> 
                </ul>
         
            </div>
        </div>
        <hr />
        <div className="footer__last">
        
                <ul>
               <li><a href="">Conditions of Use</a></li> 
               <li><a href="">Privacy Notice</a></li> 
               <li><a href="">Consumer Health Data Privacy Disclosure</a></li> 
                <li><a href="">Your Ads Privacy Choices</a></li>
                </ul>
        
            <p>© 1996-2024, Habesha.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Footer