import React, { useState } from "react";
import { eventdata } from "../data/eventdata";
import Event from "./Event";

const Events = () => {
  const [search, setSearch] = useState("");

  const filteredEvents = eventdata.filter((e) =>
    e.eventName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-yellow-50 px-6 py-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10
        bg-linear-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
        Upcoming Events
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full max-w-md px-4 py-3 rounded-xl
            bg-gray-900 border border-yellow-500
            text-yellow-100 placeholder-yellow-300
            focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((e) => (
          <Event
            key={e.id}
            eventName={e.eventName}
            description={e.description}
            venue={e.venue}
            image={e.image}
            date={e.date}
            timeFrom={e.timeFrom}
            timeTo={e.timeTo}
            eventCoordinator={e.eventCoordinator}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <p className="text-center text-yellow-400 mt-16">
          No events found 🗓️
        </p>
      )}
    </div>
  );
};

export default Events;
