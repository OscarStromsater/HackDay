import React, { useState } from 'react'
import EditBooking from './EditBooking'

const BookingCard = ({ setUpdated, booking, accessToken }) => {
  const { day, restoId, bookingRef,persons } = booking;
  const date = day.slice(0, 10);
  const time = day.slice(11, 16);
  let restaurant = ''
  switch (restoId) {
    case '64b64345-ac69-4de7-bcf1-b5f803c97329':
      restaurant = 'McDonald\'s Farsta'
      break;
    case '8b847b1d-175c-42a1-aaf2-e344a3211aca':
      restaurant = 'Monsieur Baguette';
      break;
    case '50d236a5-27f9-4cf7-96a1-9afb3e8b5c02':
      restaurant = 'Mamma\'s Italian';
      break;
    default:
      break;
  }
  const [editing, setEditing] = useState(false);
  const hidden = {
    display: editing ? 'none' : 'block',
  }
  const hiddenBooking = {
    display: editing ? 'block' : 'none',
  }
  const toggleHidden = () => setEditing(true);
  const deleteBooking = async () => {
    const deletetion = await fetch(`http://localhost:3001/api/bookings/${bookingRef}`,
      {
        method: 'DELETE',
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
    const result = await deletetion.json();
    console.log(result);
    setUpdated(true);
  }

  return (
    <section>
      <div style={hidden}>
        <section>
          <h5>{date}</h5>
          <p>Time: {time}</p>
          <p>Restaurant: {restaurant}</p>
          <p>People: {persons}</p>
        </section>
        <section>
          <button onClick={toggleHidden}>Edit Booking</button>
          <button onClick={deleteBooking}>Delete Booking</button>
        </section>
      </div>
      <div style={hiddenBooking}>
        <EditBooking booking={booking} setEditing={setEditing} setUpdated={setUpdated} />
      </div>
    </section>
  )
}

export default BookingCard;