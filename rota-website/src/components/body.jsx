import React, { useState } from 'react';
import PicCard from './pic_card';
import eventsData from '../data/eventsData.js';

export default function Body() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleClick(index) {
    setSelectedEvent(index); // Set the clicked event as the selected event
  }

  function handleBack() {
    setSelectedEvent(null); // Reset to show all events
  }

  return (
    <div className="flex flex-col justify-center min-h-screen mt-40">
      {selectedEvent === null ? (
        // Render all events when no specific event is selected
        eventsData.map((event, index) => (
          <div key={index} className="mb-20">
            <div className="mb-2 flex justify-between">
              <span className="bg-[#006E99] text-white px-2 py-1 mx-2">
                {event.name} <span className="ml-2">{event.date}</span>
              </span>
              <button
                onClick={() => handleClick(index)}
                className="bg-[#5E5E5E] px-2 text-white mr-2.5 hover:bg-[#848282]"
              >
                ALL
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4">
              {event.images.slice(0, 5).map((url, imgIndex) => (
                <PicCard key={imgIndex} imageUrl={url} />
              ))}
            </div>
          </div>
        ))
      ) : (
        // Render only the selected event
        <div className="mb-20">
          <div className="mb-2 flex justify-between">
            <span className="bg-[#26A6D9] text-white px-2 py-1 mx-2">
              {eventsData[selectedEvent].name}{' '}
              <span className="ml-2">{eventsData[selectedEvent].date}</span>
            </span>
            <button
              onClick={handleBack}
              className="bg-[#5E5E5E] px-2 text-white mr-2.5 hover:bg-[#848282]"
            >
              BACK
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-4">
            {eventsData[selectedEvent].images.map((url, imgIndex) => (
              <PicCard key={imgIndex} imageUrl={url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
