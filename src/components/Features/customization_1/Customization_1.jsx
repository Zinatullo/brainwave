import React from 'react';
import './Customization_1.scss';

export default function Customization() {
  return (
    <section className="customization">
      <div className="customization__container container">

        <div className="customization__image">
          <picture>
            <source media="(max-width: 375px)" srcSet="/375px/cust.svg" />
            <source media="(max-width: 1024px)" srcSet="/1024px/cust.svg" />
            <img 
              src="/1920px/cust.svg" 
              alt="Customization" 
              className="customization__img"
            />
          </picture>
        </div>

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

      </div>
    </section>
  );
}