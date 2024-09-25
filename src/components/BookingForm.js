import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation message after submission
    setIsSubmitted(true); // Trigger the confirmation popup
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

        <label htmlFor="res-time">Choose time:</label>
        <select id="res-time" value={time} onChange={handleTimeChange} required>
          <option value="5:00">5:00 PM</option>
          <option value="6:00">6:00 PM</option>
          <option value="7:00">7:00 PM</option>
          <option value="8:00">8:00 PM</option>
          <option value="9:00">9:00 PM</option>
          <option value="10:00">10:00 PM</option>
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <select id="guests" value={guests} onChange={handleGuestsChange} required>
         
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          
        </select>

        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* Popup Message */}
      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <h3>Booking Confirmed!</h3>
            <p>
              Your booking for {guests} guests on {date} at {time} for the occasion of {occasion} is confirmed.
            </p>
            <button onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;