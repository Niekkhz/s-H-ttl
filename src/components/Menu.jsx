import React from "react";

const Menu = () => {
  return (
    <div className="menu-background">
      <div className="container">
        <h2>Unser Menu</h2>
        <div className="menu-category">
          <h3>Suppen</h3>
          <div className="menu-item">
            <img
              src="./bilder/Karottensuppe.jpg"
              alt="Karottensuppe"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>s'Hüttls spezial Suppe</h4>
              <p>Karottensuppe mit Koriander und Kümmel.</p>
              <p className="price">5.50 €</p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="./bilder/Tomatensuppe.jpg"
              alt="Tomatensuppe"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>Tomatensuppe</h4>
              <p>Ofengeröstete Tomatensuppe mit Brot.</p>
              <p className="price">6.00 €</p>
            </div>
          </div>
        </div>
        <div className="menu-category">
          <h3>Salate</h3>
          <div className="menu-item">
            <img
              src="./bilder/CeaserSalat.jpg"
              alt="Ceaser Salat"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>Ceaser Salat</h4>
              <p>Klassischer Ceaser Salat mit Dressing und Croutons.</p>
              <p className="price">8.00 €</p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="./bilder/SnackSalat.jpg"
              alt="Snack Salat"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>Snack Salat</h4>
              <p>Beilagensalat mit Hausgemachten Dresssing.</p>
              <p className="price">4.00 €</p>
            </div>
          </div>
        </div>
        <div className="menu-category">
          <h3>Burger</h3>
          <div className="menu-item">
            <img
              src="./bilder/SmashedBurger.jpg"
              alt="Smashed Burger"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>Smashed Burger</h4>
              <p>Saftiger Rindfleisch Burger mit Käse.</p>
              <p className="price">9.50 €</p>
            </div>
          </div>
          <div className="menu-item">
            <img
              src="./bilder/ChickenBurger.jpg"
              alt="Chicken Burger"
              className="menu-img"
            />
            <div className="menu-details">
              <h4>Chicken Burger</h4>
              <p>Leckerer Hähnchen Burger mit Käse.</p>
              <p className="price">8.50 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
