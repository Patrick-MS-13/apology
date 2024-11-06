import React, { useState } from "react";
import "./style.css"; // Import the CSS file

function TimeIntervel() {
  const [intervalId, setIntervalId] = useState(null);
  const [messages, setMessages] = useState([]);

  const startInterval = () => {
    if (!intervalId) {
      const myVar = setInterval(() => {
        setMessages((prevMessages) => {
          if (prevMessages.length < 50) { // Adjust the number of messages as needed
            return [...prevMessages, "SORRY"];
          } else {
            return prevMessages; // Stop adding more messages once the limit is reached
          }
        });
      }, 1000);
      setIntervalId(myVar);
    }
    
  };

  return (
    <div className="container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className="message"
          style={{
            top: `${Math.random() * 90}vh`,
            left: `${Math.random() * 90}vw`,
            color: index < messages.length / 2 ? "black" : "white",
          }}
        >
          {msg}
        </div>
      ))}
      <button className="start-button" onClick={startInterval}>
        🖤
      </button>
    </div>
  );
}

export default TimeIntervel;
