import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./Modal";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get("http://localhost:5000/events");
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  const handleDateClick = async (info) => {
    let title = prompt("Enter event title:");
    if (title) {
      const newEvent = { title, date: info.dateStr };
      const response = await axios.post(
        "http://localhost:5000/events",
        newEvent
      );
      setEvents([...events, response.data]);
    }
  };

  const handleEventClick = (info) => {
    const EventId = info.el
      .querySelector("div")
      .querySelector("div")
      .getAttribute("data-id");
    const event = events.find((e) => e.id === EventId);
    setSelectedEvent(event);
  };

  const handleDeleteEvent = async (eventId) => {
    await axios.delete(`http://localhost:5000/events/${eventId}`);
    setEvents(events.filter((event) => event.id !== eventId));
    setSelectedEvent(null);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };
  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    return {
      html: ` <div data-id="${eventInfo.event.id}"> <b>${eventInfo.timeText}</b> <i>${eventInfo.event.title}</i> </div> `,
    };
  }

  return (
    <div className="events-background">
      <div className="container">
        <h2>Upcoming Events</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
        />
        {selectedEvent && (
          <Modal event={selectedEvent} onClose={closeModal}>
            <button onClick={() => handleDeleteEvent(selectedEvent.id)}>
              Delete Event
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Events;
