import React,{useState} from 'react';
import Booking from 'react';

const RestaurantCard = ({ restaurant }) => {
  const { name, address, priceRating, avgRating, imgUrl, cuisine } = restaurant;
  const [hidden, setHidden] = useState(true)
  const hiddenInfo = {
    display:hidden ? 'none' : 'block',
  }
  const toggle = () => {
    setHidden(!hidden)
  }

  return (
    <div className="card card--border card--white">
      <img className="card__img"
        src={imgUrl} alt="restaurant view" />
      <div className="card__information">
        <div className ="card__quickinfo">
        <h4>{name}</h4>
        <p>Rating: {avgRating}/5</p>
        <div>
        <button className="btn card__button btn--buy" onClick={toggle}>More info</button>
        <button className="btn card__button btn--view">Book now</button>
        </div>
        </div>
        <div className="card__accordion" style={hiddenInfo}>
          <div className="accordion__holder">
          <p>Price: {priceRating}</p>
          <p>{cuisine}</p>
          <p>Adress:
            <li>{address.street}</li>
            <li>{address.postalcode}</li>
            <li>{address.city}</li>
          </p>
          </div>
          <Booking restaurant={restaurant} />
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;
