import React, { useState } from 'react';
import './Book.css';
import { useStateValue } from '../Stateprovider/StateProvider';
import {useNavigate} from 'react-router-dom';
import  Flight from '../Flight/Flight'
function Book() {
  const Checkout = (event) => {
    event.preventDefault();  
    alert('Your Booking is confirmed: Check your Upcomings!'); 
    const navigate = useNavigate();
    navigate('/');
  };
    const [{ basket }, dispatch] = useStateValue();
    const [place,SetPlace]=useState('');
  
  const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: Math.random(),
            title: place,
            image: 'data:image/jpeg;base64,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',
            price: Math.random()*1000,
            rating: Math.floor(Math.random() * 5) + 1
        }
    }); 
  
}
  return (
    <div className="Book">
      <form className='formBook' onSubmit={Checkout}>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            required
            placeholder="From"
           />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            required
            placeholder="To"
            value={place}
           onChange={(e)=>SetPlace(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Departure Date</label>
          <input
            type="date"
            id="date"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Departure Time</label>
          <input
            type="time"
            id="time"
            required
          />
        </div>
      
        <button onClick={addToBasket} type="submit">Book</button>
        
      </form>
    </div>
  );
}

export default Book;
