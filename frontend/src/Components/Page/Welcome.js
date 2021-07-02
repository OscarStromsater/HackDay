import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({setWelcome}) => {
  useEffect(() => {
    setWelcome(true)
    return () => setWelcome(false)
  },[setWelcome])
  return (
    <section className="welcome">
      <h2 className="welcome__title">Welcome to RestauFind</h2>
      <article className="welcome__article">
      <p>Here you will find Restaurants and make bookings!</p>
      <p>We are currently running a trial in</p>
      <p> Stockholm and looking to expand!</p>
      <Link className="welcome__link" to={'/restaurants'}>Search restaurants!</Link>
      </article>
    </section>
  )
}

export default Welcome
