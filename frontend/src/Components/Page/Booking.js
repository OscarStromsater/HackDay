import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


const Booking = ({ id }) => {

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), '00'), '12')
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const nameHandle = e => setName(e.target.value);
  const numberHandle = e => setNumber(e.target.value);

  const handleBooking = async e => {
    e.preventDefault();

  }

  return (
    <form className="booking__form">
     <h4>Please Enter Your details to make a Reservation:</h4>
      <label htmlFor="name">Full name</label>
      <input type="text" name="name" value={name}
        onChange={nameHandle} />
      <label htmlFor="phone">Phone number</label>
      <input type="phonenumber" name="phone" value={number}
        onChange={numberHandle} />
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
    </form>)
}
export default Booking;
