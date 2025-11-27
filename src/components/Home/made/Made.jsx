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
            <div className="smart-robot">
  <div className="smart-r-content">
    <h3>Video generation</h3>
    <p>The world’s most powerful AI photo and video art generation engine.What will you create?</p>
    <div className="smart-navs">
      <img src="/other/smart-navs-1.png" alt="" className='smart-hiden'/>
      <img src="/other/smart-navs-2.png" alt="" />
      <img src="/other/smart-navs-3.png" alt="" />
      <img src="/other/smart-navs-4.png" alt="" />
      <img src="/other/smart-navs-5.png" alt="" className='smart-hiden'/>
    </div>
  </div>
  <picture>
  <source media="(max-width: 375px)" srcSet="/375px/robot.png" />
  <source media="(max-width: 768px)" srcSet="/768px/robot.png" />
  <source media="(max-width: 1024px)" srcSet="/1024px/robot.png" />

  <img src="/1920px/robot.svg" className="robot-img" alt="Generative AI" />
</picture>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}