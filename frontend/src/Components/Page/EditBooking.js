import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
  
const EditBooking = ({ booking, accessToken, setUpdated, setEditing }) => {
  const {bookingRef, } = booking
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), '00'), '12')
  );
  const [timeUpdate, setTimeUpdate] = useState(false)
  const [persons, setPersons] = useState();
  const [personUpdate, setPersonUpdate] = useState(false)
  const [response, setResponse] = useState('');
  const handlePersons = e => setPersons(parseInt(e.target.value))
  const toggle = () => setEditing(false);
  const timeToggle = () => setTimeUpdate(!timeUpdate)
  const personToggle = () => setPersonUpdate(!personUpdate)
  
  const handleBooking = async e => {
    e.preventDefault();
    setResponse('');
    console.log(persons)
    const updatedBooking = booking
    if(timeUpdate) updatedBooking.day = startDate.toISOString().slice(0,16);
    if(personUpdate) updatedBooking.persons = persons
    console.log(updatedBooking);
    const data = await fetch(`http://localhost:3001/api/bookings/${bookingRef}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedBooking)
      })
      const result = await data.json();
      console.log(result.message);
    setResponse(result.message);
    setUpdated(true);
  }

  return (
    <div style={{display:'flex',flexDirection:'column' }}>
      <button style={{alignSelf:'flex-end'}} onClick={toggle}>Cancel Edit</button>
    <form className="booking__form" onSubmit={handleBooking}>
      <h4>Edit your booking:</h4>
      {response && <h4>{response}</h4>}
      <label htmlFor="persons">How many will eat:</label>
      <label htmlFor="checkPerson">
      <input name="checkPerson"type="checkbox" onClick={personToggle}/>
      check if updating persons</label>
      <select onChange={handlePersons} selected={persons}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <label htmlFor='datepicker'>Date and time:</label>
      <label htmlFor="checkTime">
      <input name="checkTime" type="checkbox" onClick={timeToggle}/>
      check if updating date or time
      </label>
      <DatePicker name="datepicker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minTime={setHours(setMinutes(new Date(), '00'), '12')}
        maxTime={setHours(setMinutes(new Date(), '30'), '23')}
        dateFormat="dd/MM/yyyy HH:mm"
        timeFormat="HH:mm"
      />
      <input type="submit" value="Edit Booking" />
    </form>
    
    </div>)
}
export default EditBooking;
