import React, { useEffect, useState } from "react"
import BookingCard from "./BookingCard";


const Bookings = ({ accessToken }) => {
  const [bookings, setBookings] = useState([])
  const [updated, setUpdated] = useState(false);
  const [message, setMessage] = useState('');

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
    <div>
      <h2>Here are your bookings!</h2>
      {message && <p>{message}</p>}
      {bookings && bookings.map(booking => {
        return (<BookingCard key={booking.bookingRef} accessToken={accessToken} booking={booking}
           setUpdated={setUpdated}/>)
      })}
    </div>
  )
}

export default Bookings;