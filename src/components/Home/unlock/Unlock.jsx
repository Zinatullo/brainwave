import React from "react";
import "./Unlock.scss";

export default function Unlock() {
  return (
    <section className="unlock container">
      <div className="unlock-inner">
        <div className="unlock-content">
          <div className="unlock-text">
            <h2 className="unlock-title">Unlock the power of AI</h2>
            <p className="unlock-desc">
              Brainwave unlocks the potential of AI-powered applications
            </p>
            <button className="unlock-btn btn-active">See how it work</button>
          </div>

          <div className="unlock-arrows">
            <img src="/home/l.png" alt="left" />
            <img src="/home/r.png" alt="right" />
          </div>
        </div>

        <div className="unlock-image">
          <img src="/home/code.png" alt="code screenshot" />
        </div>
      </div>
    </section>
  );
}