import React from 'react'
import './Readytopay.css'
import { Link } from 'react-router-dom'
import Flight from '../Flight/Flight'
import { useStateValue } from '../Stateprovider/StateProvider'
import { useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../Utills/Axios'

function Readytopay() {
  const [{ basket, user }, dispatch] = useStateValue();
    const stripe=useStripe();
  const element=useElements();
const navigate=useNavigate();
  const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);
  const [error, setError]=useState(null);
  const [disabled, setDisabled]=useState(true);
  const [processing,setProcessing]=useState('');
  const [succeeded,setSucceeded]=useState(false);
  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
};
  const handleSubmit = async (e) => {  
     alert("Done! Check your email!")
   e.preventDefault();
   setProcessing(true);
   
   const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: element.getElement(CardElement),
        
    }
 

}).then(({ paymentIntent }) => {
    setSucceeded(true);
    setError(null);
    setProcessing(false);

    navigate("/orders")
})
};
  return (
    <div className="payment">
            <div className="payment__container">
                <h1>
                    Check-In(<Link to="/payment">{basket?.length} Flights</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Your Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Bahir Dar, Amhara</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review the flight and check your ticket</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <Flight
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                   <div className="payment__details">
                    <form onSubmit={handleSubmit}> 
                      <CardElement onChange={handleChange} />
                      <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Total Price:{value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                /> 
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Done!</p> : "Pay now"}</span>
                                </button>
                                </div>
                                {error && <div>{error}</div>}
                    </form>
                  
                   </div>
                
                </div>
            </div>
        </div>
  )
}

export default Readytopay