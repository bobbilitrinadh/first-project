import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

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
          {availableTimes.map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          min="2"
          max="10"
          value={guests}
          onChange={handleGuestsChange}
          required
        />

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