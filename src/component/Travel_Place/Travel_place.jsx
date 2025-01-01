import React from 'react'
import './Travel_place.css'
import { useStateValue } from '../Stateprovider/StateProvider';
function Travel_place({title, price , image, rating}) {
  const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }

  return (
    <div className='Travel_place'>
        <div className="Travel_place__info">
            <p>{title}</p>
            <p className='Travel_place__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="Travel_place__rating">
            { Array(rating).fill().map(() => ( <p>⭐</p> )) }
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}> Visit Now </button>
    </div>
  )
}

export default Travel_place