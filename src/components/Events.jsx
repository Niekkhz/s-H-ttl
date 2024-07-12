import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./Modal";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      date: "2023-07-10",
      details: "Details about Event 1",
    },
    {
      id: 2,
      title: "Event 2",
      date: "2023-07-12",
      details: "Details about Event 2",
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (info) => {
    let title = prompt("Enter event title:");
    if (title) {
      setEvents([
        ...events,
        { id: events.length + 1, title, date: info.dateStr },
      ]);
    }
  };

  const handleEventClick = (info) => {
    const event = events.find((e) => e.id === parseInt(info.event.id));
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-background">
      <div className="container">
        <h2>Upcoming Events</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events.map((event) => ({
            ...event,
            id: event.id.toString(),
          }))}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
        {selectedEvent && <Modal event={selectedEvent} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Events;
