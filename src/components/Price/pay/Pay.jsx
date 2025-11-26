import React from "react";
import "./Pay.scss";
export default function Pay() {
  return (
    <>
      <div className="pay">
        <div className="container">
          <div className="pay-title">
            <h1>Pay once, use forever</h1>
            <p>
              Get started with Brainwave - AI chat app today and experience the
              power of AI in your conversations!
            </p>
            <br />
            <div className="pay-div">
              <button className="pay-monthly">monthly</button>{" "}
              
              <button className="pay-annually">annually</button>{" "}
            </div>
          </div>


          <div className="pay-home">
            <div className="pay-cards">
              <div className="pay-card basic-pay">
                <span className="pay-basic">Basic</span>
                <br />
                <p>
                  AI chatbot, personalized <br /> recommendations
                </p>
                <div className="pay-card-div">
                  <h5>$</h5>
                  <h2>0</h2>
                </div>
                <img src="/other/white-btn.svg" alt="" />
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>An AI chatbot that can understand your queries</h3>
                </div>
                    <br />
                
                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Personalized recommendations based on your preferences
                  </h3>
                </div>
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Ability to explore the app and its features without any cost
                  </h3>
                </div>
              </div>


              <div className="pay-card premium-pay">
                <span className="pay-premium">Premium</span>
                <br />
                <p>
                  AI chatbot, personalized <br /> recommendations
                </p>
                <div className="pay-card-div">
                  <h5>$</h5>
                  <h2>9.99</h2>
                </div>
                <img src="/other/white-btn.svg" alt="" />
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>An AI chatbot that can understand your queries</h3>
                </div>
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Personalized recommendations based on your preferences
                  </h3>
                </div>
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Ability to explore the app and its features without any cost
                  </h3>
                </div>
              </div>
              
              <div className="pay-card enterprise-pay">
                <span className="pay-enterprise">Enterprise</span>
                <br />
                <p>
                  AI chatbot, personalized <br /> recommendations
                </p>
                <div className="pay-card-div">
                  <h5><br /></h5>
                  <h2><br /></h2>
                </div>
                <img src="/other/btn-active.svg" alt="" />
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>An AI chatbot that can understand your queries</h3>
                </div>
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Personalized recommendations based on your preferences
                  </h3>
                </div>
                    <br />

                <div className="pay-divv">
                  <img src="/other/Check icon.svg" alt="" />
                  <h3>
                    Ability to explore the app and its features without any cost
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
