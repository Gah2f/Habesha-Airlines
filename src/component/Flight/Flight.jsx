import React from 'react'
import './Flight.css'
import { useStateValue } from '../Stateprovider/StateProvider';
function Flight({id, title, price , image, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  return (
    <div className="Flight">
    <img className="Flight__image" src={image} />
    <div className="Flight__info">
        <p className="Flight__title">{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="Flight__rating">
        { Array(rating).fill().map(() => ( <p>⭐</p> )) }
        </div>
        <button onClick={removeFromBasket}>Cancel Flight</button>
    </div>
</div>
  )
}

export default Flight