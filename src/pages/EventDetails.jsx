import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { eventdata } from "../data/eventdata";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventdata.find((e) => e.id === Number(id));

  const [timeLeft, setTimeLeft] = useState(null);

 useEffect(() => {
  if (!event) return;

  const eventDateTime = new Date(`${event.date} ${event.timeFrom}`);

  const timer = setInterval(() => {
    const now = new Date();
    const diff = eventDateTime - now;

    if (diff <= 0) {
      clearInterval(timer);
      setTimeLeft(null);
      return;
    }

    setTimeLeft({
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    });
  }, 1000);

  return () => clearInterval(timer);
}, [event]);


  const handleShare = async () => {
    try {
      await navigator.share({
        title: "CircleUp Event",
        text: "Join this event with me!",
        url: window.location.href,
      });
    } catch (error) {
      console.log("Sharing cancelled");
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-yellow-400 text-xl">Event not found 😕</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-yellow-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link
          to="/events"
          className="inline-block mb-6 text-yellow-400 hover:underline"
        >
          ← Back to Events
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-yellow-600 shadow-lg">
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Details */}
          <div className="space-y-6">

            {/* Category + Timer */}
          {/* Category + Countdown */}
<div className="flex items-center justify-between gap-4">

  {/* Category */}
  <span className="px-4 py-1 rounded-full text-sm font-semibold
    bg-yellow-500 text-black">
    {event.category}
  </span>

  {/* Countdown */}
 
  {timeLeft ? (
    <div className="flex gap-2 border-white bg-white">

      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center
            bg-white border
            rounded-lg px-3 py-2 min-w-15"
        >
          <span className="text-xl font-bold text-red-600 leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase text-red-600 tracking-wider">
            {item.label}
          </span>
        </div>
      ))}

    </div>
  ) : (
    <div className="px-4 py-2 rounded-lg
      bg-yellow-500 text-black text-sm font-bold">
      Live 🎉
    </div>
  )}

</div>


            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-tight">
              {event.eventName}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-yellow-200">
              <span>
                📅{" "}
                {new Date(event.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>⏰ {event.timeFrom} – {event.timeTo}</span>
              <span>📍 {event.venue}</span>
              <span>👤 {event.eventCoordinator}</span>
            </div>

            {/* Description */}
            <p className="text-yellow-100 leading-relaxed max-w-xl">
              {event.description}
            </p>

            {/* Price */}
            <div className="text-lg font-semibold text-yellow-300">
              {event.price === 0 ? "🎉 Free Event" : `₹ ${event.price}`}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2
                  bg-yellow-500 text-black px-5 py-2
                  rounded-lg font-semibold
                  hover:bg-yellow-400 transition"
              >
                🔗 Share Event
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
