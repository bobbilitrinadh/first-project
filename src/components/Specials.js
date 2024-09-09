import React from 'react';

const Specials = () => {
  const specials = [
    {
      title: "Greek Salad",
      image: "../pictures/greeksalad.jpg",
      description: "Crispy lettuce, peppers, olives, and our house-made feta cheese.",
      price: "$12.99",
    },
    {
      title: "Bruschetta",
      image: "../pictures/bruchetta.svg",
      description: "Grilled bread topped with garlic, tomatoes, and fresh basil.",
      price: "$5.99",
    },
    {
      title: "Lemon Dessert",
      image: "../pictures/lemondessert.jpeg",
      description: "A delicious Yummy and tangy lemon-flavored dessert.",
      price: "$5.00",
    },
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="order-button">Online Menu</button>
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