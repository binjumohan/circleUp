import React from "react";

const Event = ({
  eventName,
  description,
  venue,
  image,
  date,
  timeFrom,
  timeTo,
  eventCoordinator,
}) => {
  return (
    <div className="bg-gray-900 border border-yellow-600 rounded-2xl
      overflow-hidden shadow-lg hover:shadow-yellow-600/30
      transform hover:-translate-y-2 transition duration-300">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={eventName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-yellow-400">
          {eventName}
        </h2>

        <p className="text-sm text-yellow-100 line-clamp-3">
          {description}
        </p>

        <div className="text-sm text-yellow-300 space-y-1">
          <p>📍 {venue}</p>
          <p>
            📅{" "}
            {new Date(date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>⏰ {timeFrom} – {timeTo}</p>
        </div>

        <div className="pt-4 border-t border-yellow-700 flex justify-between items-center">
          <span className="text-sm text-yellow-400">
            👤 {eventCoordinator}
          </span>

          <button
            className="px-4 py-2 rounded-lg bg-yellow-500 text-black
              font-semibold hover:bg-yellow-400 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
