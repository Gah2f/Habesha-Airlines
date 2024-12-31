import React from 'react'
import Habeshaimg from '../../../../image/Logo.jpg'
import './Header.css'  
import { Search, ShoppingBasket } from '@material-ui/icons'
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {Link} from 'react-router-dom'
import { useStateValue } from '../Stateprovider/StateProvider';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
};



  return (
    <div>
      <div className='header'>
      <div className='headerimg'>
        <Link to="/"> 
        <img className='header__logo' src={Habeshaimg} alt="the-img" />
        </Link>     
      </div>
      <div className='header__search'>        
          <input 
        placeholder='Search Fight' 
        className='header__search__input' 
        type="text" 
      />
        <Search className='header__search__icon'/>
              
      </div>
      <div>
        <div className="header__nav">
        < div onClick={handleAuthentication} className='header-options'>
        <span className='header__option__line1'>
        Hello {!user ? "Guest" : user?.email}
          </span>
        <Link to= "/login"> 
        <span className='header__option__line2'>
        {user ? "Sign Out" : "Sign In"}
        </span>
        </Link>
       
      </div>
      <div className='language'>
      <select name="" id="">
                <option value="">EN</option>
                <option value="">AM</option>
              </select>
      </div>
      <Link to="/book"> 
      <div className='header-options'>
        <span className='header__option__line1'>Book</span>
        <span className='header__option__line2'>& Order</span>
      </div>
      </Link>
      <div className='header-options'>
        <span className='header__option__line1'>Your</span>
        <span className='header__option__line2'>Flights</span>
      </div>
      <div className="header__options__upcoming">
      <Link to="/payment"> 
      {/* <ShoppingBasket/> */}
      <p>Upcomings</p>
      </Link>
        <span className='header__option__line2 header__basketCount'>  {basket.length} </span>
      </div>
        </div>    
      </div>
    </div>
    </div>
  )
}

export default Header