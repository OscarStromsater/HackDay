import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
  
const Booking = ({ id, accessToken }) => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), '00'), '12')
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const [persons, setPersons] = useState(2);
  const [response, setResponse] = useState('');
  const nameHandle = e => setName(e.target.value);
  const personHandle = e => setPersons(parseInt(e.target.value));
  const numberHandle = e => setNumber(e.target.value);

  const handleBooking = async e => {
    setResponse('');
    console.log()
    e.preventDefault();
    setResponse('');
    const booking = {
      id,
      name,
      number,
      persons,
      startDate
    }
    if(/[a-z]/i.test(booking.number)){
      return setResponse('Only numbers & minimum 8 digits in phonenumber');
    } 
    const data = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(booking)
      })
      const result = await data.json();
    setResponse(result.message);
    
  }

  return (
    <form className="booking__form" onSubmit={handleBooking}>
      <h4>Please Enter Your details to make a Reservation:</h4>
      {response && <h4>{response}</h4>}
      <label htmlFor="name">Full name</label>
      <input type="text" name="name" value={name}
        onChange={nameHandle} required/>
      <label htmlFor="phone">Phone number</label>
      <input type="tel" name="phone" value={number}
        onChange={numberHandle} required/>
      <label htmlFor="persons">How many will eat:</label>
      <select onChange={personHandle} selected={persons}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <label htmlFor='datepicker'>Date and time:</label>
      <DatePicker name="datepicker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minTime={setHours(setMinutes(new Date(), '00'), '12')}
        maxTime={setHours(setMinutes(new Date(), '30'), '23')}
        dateFormat="dd/MM/yyyy HH:mm"
        timeFormat="HH:mm"
      />
      <input className="booking__submit" type="submit" value="Make Booking" />
    </form>)
}
export default Booking;
