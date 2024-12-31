import React from 'react'
import './Payment.css'
import Subtotal from '../Subtotal/Subtotal'
import Flight from '../Flight/Flight'
import { useStateValue } from '../Stateprovider/StateProvider';
function Payment() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutleft__container">
      <div className="checkout__left">
        <img className="checkout__img"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""  
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">Your Flights list</h2>
        </div>
        <div>
        {basket.map((product, index) => (
                    <Flight
                        key={index}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                    />
                ))}
        </div>
      </div>
   
        <div className="checkout__right">
                <Subtotal />
            </div>
    </div>
  )
}

export default Payment