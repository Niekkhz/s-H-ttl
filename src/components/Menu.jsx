import React, { useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    {
      category: "Suppen",
      items: [
        {
          name: "s'Hüttls spezial Suppe",
          description: "Karottensuppe mit Koriander und Kümmel.",
          price: "5.50 €",
          img: "./bilder/Karottensuppe.jpg",
        },
        {
          name: "Tomatensuppe",
          description: "Ofengeröstete Tomatensuppe mit Brot.",
          price: "6.00 €",
          img: "./bilder/Tomatensuppe.jpg",
        },
      ],
    },
    {
      category: "Salate",
      items: [
        {
          name: "Ceaser Salat",
          description: "Klassischer Ceaser Salat mit Dressing und Croutons.",
          price: "8.00 €",
          img: "./bilder/CeaserSalat.jpg",
        },
        {
          name: "Snack Salat",
          description: "Beilagensalat mit Hausgemachten Dresssing.",
          price: "4.00 €",
          img: "./bilder/SnackSalat.jpg",
        },
      ],
    },
    {
      category: "Burger",
      items: [
        {
          name: "Smashed Burger",
          description: "Saftiger Rindfleisch Burger mit Käse.",
          price: "9.50 €",
          img: "./bilder/SmashedBurger.jpg",
        },
        {
          name: "Chicken Burger",
          description: "Leckerer Hähnchen Burger mit Käse.",
          price: "8.50 €",
          img: "./bilder/ChickenBurger.jpg",
        },
      ],
    },
    {
      category: "Schnitzel",
      items: [
        {
          name: "Wiener Schnitzel",
          description: "Knuspriges Schweineschnitzel mit Pommes.",
          price: "12.50 €",
          img: "./bilder/Schnitzel.jpg",
        },
        {
          name: "Knusperschnitzel",
          description:
            "Knackiges Hähnchenschnitzel mit Cornflakespanade und Pommes.",
          price: "14.50 €",
          img: "./bilder/knusperschnitzel.jpg",
        },
      ],
    },
    {
      category: "Dessert",
      items: [
        {
          name: "Käsekuchen",
          description: "Fluffiger Käsekuchen.",
          price: "2.50 €",
          img: "./bilder/käsekuchen.jpg",
        },
        {
          name: "Tiramisu",
          description: "Hausgemachtes Tiramisu.",
          price: "3.50 €",
          img: "./bilder/tiramisu.jpg",
        },
      ],
    },
  ];

  const filteredMenuItems = menuItems.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="menu-background">
      <div className="container">
        <h2>Unser Menü</h2>
        <input
          type="text"
          placeholder="Suche nach Gerichten..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        {filteredMenuItems.map((category) => (
          <div key={category.category} className="menu-category">
            <h3>{category.category}</h3>
            {category.items.map((item) => (
              <div key={item.name} className="menu-item">
                <img src={item.img} alt={item.name} className="menu-img" />
                <div className="menu-details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <ScrollToTopButton /> {/* Scroll-to-Top-Button hinzufügen */}
      </div>
    </div>
  );
};

export default Menu;
