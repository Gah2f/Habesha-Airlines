import React from 'react'
import './Subtotal.css'
import CurrrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Stateprovider/StateProvider';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    const getBasketTotal = (basket) =>
        basket.reduce((amount, item) => item.price + amount, 0);
  return (
    <div>
         <div className="subtotal">
            <CurrrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal (  {basket.length}  items ):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            Use my previous miles
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e) => navigate('/readytopay')} >Proceed to  Check-In</button>

        </div>
    </div>
  )
}

export default Subtotal