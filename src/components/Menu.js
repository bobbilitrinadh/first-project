import React from 'react';
import GreekSalad from '../pictures/greeksalad.jpg';
import Bruschetta from '../pictures/bruschetta.svg';
import LemonDessert from '../pictures/lemondessert.jpg';
import Biryani from '../pictures/Biryani.jpeg';
import Pizza from '../pictures/Pizza.jpeg';
import Icecream from '../pictures/Icecream.jpeg';


const Menu = () => {
  const menuItems = [
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
      description: "A delicious and tangy lemon-flavored dessert.",
      price: "$5.00",
    },
    {
      title: "Pizza",
      image: Pizza,
      description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      price: "$9.99",
    },
    {
      title: "Biryani",
      image: Biryani,
      description: "A Delicious, Yummy, Spicy  Chicken Dum Biryani.",
      price: "$12.99",
    },
    {
      title: "Ice cream",
      image: Icecream,
      description: "Delicious icecream with refreshing taste and feel.",
      price: "$4.99",
    },
    // Add more menu items as needed
  ];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.title} className="menu-image" />
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="menu-footer">
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
