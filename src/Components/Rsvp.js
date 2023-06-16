import React from "react";

const Rsvp = () => {
  return (
    <div className="attend">
      <div className="attend-text">
        <h1>Can't make it to the event?</h1>
        <p>We've got you!!</p>
      </div>

      <div className="attend-btn">
        <a
          href="https://web.facebook.com/groups/doyinkorede/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          {" "}
          <button style={{ cursor: "pointer" }}>Watch Live!</button>
        </a>
      </div>
    </div>
  );
};

export default Rsvp;
