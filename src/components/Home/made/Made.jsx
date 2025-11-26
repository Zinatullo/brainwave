import React from "react";
import "./Made.scss";

export default function Made() {
  return (
    <section className="made">
      <div className="made-inner">
        <header className="made-header">
          <h2 className="made-title">Generative AI made for creators.</h2>
          <p className="made-subtitle">
            Brainwave unlocks the potential of AI-powered applications
          </p>
        </header>

        <div className="made-images">
          <img src="/home/im1.png" alt="" className="made-img-large" />
          <div className="made-row">
            <img src="/home/im2.png" alt="" className="made-img-medium" />
            <img src="/home/im3.png" alt="" className="made-img-medium" />
          </div>
        </div>
      </div>
    </section>
  );
}