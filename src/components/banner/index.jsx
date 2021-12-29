import React from "react";
import "./styles.css";

const banner = () => {
  return (
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),url('https://images.unsplash.com/photo-1535732826096-e5c9c47b02d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXklMjB0cmVlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60')`,
        }}
      >
        <div className="container h-100">
          <div className="content-wrap d-flex align-items-center justify-content-center flex-column h-100">
            <p className="para">HELLO MY PEOPLE,MY NAME IS</p>
            <h1 className="name">PAUL SILVA</h1>
            <p className="para">WEB DESIGNER,DEVELOPER AND GAME ADDICT</p>
          </div>
        </div>
      </div>
  );
};

export default banner;
