import React, { useEffect, useState } from "react"
import BookingCard from "./BookingCard";


const Bookings = ({ accessToken, setOrders }) => {
  const [bookings, setBookings] = useState([])
  const [updated, setUpdated] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setOrders(true);
    return () => setOrders(false);
  },[setOrders])

  useEffect(() => {
    const fetchBookings = async() => {
      setMessage('');
      const bookings = await fetch('http://localhost:3001/api/bookings',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${accessToken}`,
        }
      })
      const results = await bookings.json();
      if(results.message === 'You have no Bookings'){
        setBookings([]);
        return setMessage(results.message);
      }
      console.log(results);
      return setBookings(results)
    }
    fetchBookings();
  },[updated, accessToken])

  return (
    <div className="bookings">
      <h2 className="booking__title">Here are your bookings!</h2>
      <section className="bookings__holder">
      {message && <p>{message}</p>}
      {bookings && bookings.map(booking => {
        return (<BookingCard key={booking.bookingRef} accessToken={accessToken} booking={booking}
           setUpdated={setUpdated}/>)
      })}
      </section>
    </div>
  )
}

export default Bookings;