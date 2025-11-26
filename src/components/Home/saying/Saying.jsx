import React from "react";
import "./Saying.scss";

export default function Saying() {
  return (
    <section className="saying">
      <div className="saying-inner">
        <header className="saying-header">
          <p className="saying-label">[ ready to get started ]</p>
          <h2 className="saying-title">
            What the community is saying
          </h2>
        </header>

        <div className="saying-images">
          <img src="/home/sm1.png" alt="" className="saying-img" />
          <img src="/home/sm2.png" alt="" className="saying-img" />
        </div>

        <div className="saying-arrows">
          <img src="/home/l.png" alt="left" />
          <img src="/home/r.png" alt="right" />
        </div>
      </div>
    </section>
  );
}