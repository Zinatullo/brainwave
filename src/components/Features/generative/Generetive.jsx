import React from 'react';
import './Generative.scss';

export default function Generative() {
  return (
    <>

    <div className="generative container">   
      <div className="generative-title">
        <h2>Generative AI made for creators.</h2>
        <p>
          Here are some of the core features of Brainwave that make it stand out from other chat applications
        </p>
      </div>

<picture className="smart-picture">
  <source media="(max-width: 375px)" srcSet="/375px/smart.svg" />
  <source media="(max-width: 768px)" srcSet="/768px/smart.svg" />
  <source media="(max-width: 1024px)" srcSet="/1024px/smart.svg" />
  <source media="(max-width: 1200px)" srcSet="/1200px/smart.svg" />
  <img src="/1920px/smart.svg" className="smart-img" alt="Generative AI" />
</picture>

<div className="smart-images">
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

<picture>
  <source media="(max-width: 375px)" srcSet="/375px/games.svg" />
  <source media="(max-width: 768px)" srcSet="/768px/games.svg" />
  <source media="(max-width: 1024px)" srcSet="/1024px/games.svg" />
  <source media="(max-width: 1200px)" srcSet="/1200px/games.svg" />
  <source media="(max-width: 1440px)" srcSet="/1440px/games.svg" />
  <img src="/1920px/games.svg" className="games-img" alt="Generative AI" />
</picture>
</div>




    </div>
    </>
  );
}