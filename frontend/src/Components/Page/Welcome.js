import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section>
      <article>
      <h2>Welcome to RestoFind!</h2>
      <p>Here you will find all kinds of Restaurants and make bookings!</p>
      <p>You can even look up your current bookings and edit them.</p>
      <p>We are currently running a trial in Stockholm and looking to expand!</p>
      </article>
      <Link to={'/restaurants'}>Search restaurants!</Link>
    </section>
  )
}

export default Welcome
