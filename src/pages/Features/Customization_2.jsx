import React from 'react';
import './Customization-2.scss';

export default function Customization() {
  return (
    <div className="cust container">


      <div className="">
        <h2>Customization Options</h2>
        <br />
        <div className="div">
          <img src="/other/Check icon.svg" alt="" />
          <span>Seamless Integration</span>
          <br /><br />
        </div>
        <br />
        <p>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
        <br /><br />
        <div className="div">
          <img src="/other/Check icon.svg" alt="" />
          <span>Seamless Integration</span>
          <br /><br />
        </div>
        <br /><br />
        <div className="div">
          <img src="/other/Check icon.svg" alt="" />
          <span>Seamless Integration</span>
          <br /><br />
        </div>
      </div>
            <div className="">
        <picture>
          <source media="(max-width: 375px)" srcSet="/375px/cust.svg" />
          <source media="(max-width: 1024px)" srcSet="/1024px/cust.svg" />
          <img src="/1920px/cust.svg" className="cust-img" alt="Customization" />
        </picture>
      </div>
    </div>
  );
}