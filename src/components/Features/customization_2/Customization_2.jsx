import React from 'react';
import './Customization-2.scss';

export default function Customization() {
  return (
    <section className="customization">
      <div className="customization__container container">



        <div className="customization__content">
          <h2 className="customization__title">Customization Options</h2>
                      <div className="customization__item">
              <img src="/other/Check icon.svg" alt="" />
              <span>Seamless Integration</span>
            </div>
          <p className="customization__text">
            With smart automation and top-notch security, it's the perfect solution 
            for teams looking to work smarter.
          </p>
          

          <div className="customization__list">

            <div className="customization__item">
              <img src="/other/Check icon.svg" alt="" />
              <span>White-label Solutions</span>
            </div>
            <div className="customization__item">
              <img src="/other/Check icon.svg" alt="" />
              <span>Custom Branding & UI</span>
            </div>
          </div>
        </div>
        <div className="customization__image">
          <picture>
            <source media="(max-width: 375px)" srcSet="/375px/cust-2.svg" />
            <source media="(max-width: 1024px)" srcSet="/1024px/cust-2.svg" />
            <img 
              src="/1920px/cust-2.svg" 
              alt="Customization" 
              className="customization__img especial"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}