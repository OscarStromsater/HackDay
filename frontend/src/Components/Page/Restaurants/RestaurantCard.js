import React from 'react'

const RestaurantCard = ({ restaurant }) => {
  const { name, address, priceRating, avgRating, imgUrl, cuisine } = restaurant


  return (
    <div className="card card--border card--white">
      <img className="card__img"
        src={imgUrl} alt="restaurant view" />
      <div className="card__information">
        <div className ="card__quickinfo">
        <h4>{name}</h4>
        <p>Rating: {avgRating}/5</p>
        <button>Book now</button>
        </div>
        <div className="card__accordion">
          <div>
          <p>{priceRating}</p>
          <p>{cuisine}</p>
          <p>Adress:</p>
          <ul>
            <li>{address.street}</li>
            <li>{address.postalcode}</li>
            <li>{address.city}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;
