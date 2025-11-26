import React from "react";
import "./Working.scss";

export default function Working() {
  return (
    <section className="working">
      <div className="working-inner">
        <header className="working-header">
          <p className="working-label">[ ready to get started ]</p>
          <h2 className="working-title">What we’re working on</h2>
        </header>

        <div className="working-row">
          <img src="/home/ms1.png" alt="" />
          <img src="/home/ms2.png" alt="" />
        </div>

        <div className="working-row">
          <img src="/home/ms3.png" alt="" />
          <img src="/home/ms4.png" alt="" />
        </div>
      </div>
    </section>
  );
}