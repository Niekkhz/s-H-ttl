import React from "react";

const Home = () => {
  return (
    <div className="home-background">
      <div className="container">
        <h2>Welcome to our Restaurant</h2>
        <div className="info-boxes">
          <div className="info-box">
            <h3>Öffnungszeiten</h3>
            <p>Montag: Geschlossen</p>
            <p>Dienstag - Freitag: 16:00 - 00:00</p>
            <p>Samstag: 09:00 - 00:00</p>
            <p>Sonntag: 09:00 - 00:00</p>
            <h3>Kontakt</h3>
            <p>Adresse: Hofmarkstraße 51, 82152 Planegg</p>
            <p>Telefon: 0178 / 8001111</p>
            <p>Email: info@restaurant.de</p>
          </div>
          <div className="info-box">
            <h3>Events</h3>
            <p>Unsere Events werden euch in unserem Kalender angezeigt</p>
          </div>
          <div className="info-box">
            <h3>Über uns</h3>
            <p>
              Willkommen in unserem Restaurant. Wir bieten Ihnen eine große
              Auswahl an köstlichen Gerichten und Getränken. Besuchen Sie uns
              und genießen Sie eine wunderbare Zeit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
