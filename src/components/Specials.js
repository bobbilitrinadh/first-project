import React from 'react';
import GreekSalad from '../pictures/greeksalad.jpg';
import Bruschetta from '../pictures/bruschetta.svg';
import LemonDessert from '../pictures/lemondessert.jpg';
import { Link } from 'react-router-dom';

const Specials = () => {
  const specials = [
    {
      title: "Greek Salad",
      image: GreekSalad,
      description: "Crispy lettuce, peppers, olives, and our house-made feta cheese.",
      price: "$12.99",
    },
    {
      title: "Bruschetta",
      image: Bruschetta,
      description: "Grilled bread topped with garlic, tomatoes, and fresh basil.",
      price: "$5.99",
    },
    {
      title: "Lemon Dessert",
      image: LemonDessert,
      description: "A delicious Yummy and tangy lemon-flavored dessert.",
      price: "$5.00",
    },
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <Link to="/menu">
        <button className="order-button">Online Menu</button>
        </Link>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.title} className="special-image" />
            <div className="special-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="special-footer">
                <span className="special-price">{item.price}</span>
                <button className="order-button">Order & Delivery</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Specials;