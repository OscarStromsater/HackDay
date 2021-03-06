import React, { useState } from 'react';
import Booking from '../Booking';

const RestaurantCard = ({ restaurant, accessToken }) => {
  const { id, name, address, priceRating, avgRating, imgUrl, cuisine } = restaurant;
  const [hiddenInfo, setHiddenInfo] = useState(true)
  const [hiddenBooking, setHiddenBooking] = useState(true)
  const hiddenInf = { display: hiddenInfo ? 'none' : 'block', }
  const hiddenBook = { display: hiddenBooking ? 'none' : 'block', }
  const toggleInfo = () => setHiddenInfo(!hiddenInfo)
  const toggleBooking = () => setHiddenBooking(!hiddenBooking);
  return (
    <div className="card card--border card--white">
      <img className="card__img"
        src={imgUrl} alt="restaurant view" />
      <div className="card__information">
        <div className="card__quickinfo">
          <h4>{name}</h4>
          <p>Rating: {avgRating}/5</p>
          <div className="buttons">
            <button className="btn card__button btn--buy" onClick={toggleInfo}>More info</button>
            <button className="btn card__button btn--view" onClick={toggleBooking}>Book now</button>
          </div>
        </div>
        <div style={hiddenBook}>
          <Booking id={id} accessToken={accessToken} />
        </div>
        <div className="card__accordion" style={hiddenInf}>
          <div className="accordion__holder">
            <p>Adress:
              <li>{address.street}</li>
              <li>{address.postalcode}</li>
              <li>{address.city}</li>
            </p>
            <p>Price: {priceRating}</p>
            <p>{cuisine}</p>
          </div>
          <h4>Bio:</h4>
          <p>Spicy jalapeno bacon ipsum dolor amet alcatra pork belly aliquip, id buffalo do cillum ball tip nostrud chislic sirloin in esse consectetur ad. Exercitation ut jerky sirloin, officia adipisicing andouille tongue prosciutto non voluptate buffalo laboris cow. Consectetur pork chop ut ut reprehenderit. Ground round brisket ham boudin. Ut duis rump leberkas, proident hamburger sirloin shankle velit prosciutto pig fugiat dolor eu. Turducken ut veniam, ex tempor sint nostrud frankfurter spare ribs sausage jowl.</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;
