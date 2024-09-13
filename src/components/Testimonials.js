import React from 'react';
import JohnDoe from "../pictures/John Doe.jpeg";
import JaneSmith from "../pictures/Jane Smith.jpeg";
import DavidLee from "../pictures/David Lee.jpeg";

// Full Star SVG Component
const Star = ({ filled }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? '#FFD700' : 'none'}
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8" />
  </svg>
);

// Half Star SVG Component
const HalfStar = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#FFD700"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="halfGrad">
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="white" stopOpacity="1" />
      </linearGradient>
    </defs>
    <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8" fill="url(#halfGrad)" />
  </svg>
);

const testimonialsData = [
  {
    name: 'John Doe',
    rating: 5,
    imageUrl: JohnDoe, // Replace with the actual image path
  },
  {
    name: 'Jane Smith',
    rating: 4.5,
    imageUrl: JaneSmith, // Replace with the actual image path
  },
  {
    name: 'David Lee',
    rating: 4,
    imageUrl: DavidLee, // Replace with the actual image path
  },
];

// Function to render stars based on the rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0;    // Check if there's a half star

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} filled={true} />);
  }

  // Render half star if applicable
  if (halfStar) {
    stars.push(<HalfStar key="half" />);
  }

  // Render empty stars to complete the 5-star rating
  const totalStars = halfStar ? fullStars + 1 : fullStars;
  for (let i = totalStars; i < 5; i++) {
    stars.push(<Star key={i + 'empty'} filled={false} />);
  }

  return stars;
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.imageUrl}
              alt={`${testimonial.name} pic`}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <div className="star-rating">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
