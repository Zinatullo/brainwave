import React from "react";
import "./Ai.scss";

const Ai = () => {
  return (
    <section className="ai-section">
      <div className="ai-container">
        <div className="ai-content">

          <div className="ai-text-column">
            <h2 className="ai-title">
              AI chat app for seamless collaboration
            </h2>

            <div className="ai-features">
              <div className="feature-item">
                <img src="/home/unlock.svg" alt="" />
                <p>Seamless Integration</p>
              </div>

              <p className="ai-description">
                With smart automation and top-notch security, it's the perfect
                solution for teams looking to work smarter.
              </p>

              <div className="feature-item">
                <img src="/home/unlock.svg" alt="" />
                <p>Seamless Integration</p>
              </div>

              <div className="feature-item">
                <img src="/home/unlock.svg" alt="" />
                <p>Seamless Integration</p>
              </div>
            </div>

            <button className="ai-button">Try it now</button>
          </div>

          <div className="ai-image-column">
            <p className="ai-image-description">
              With smart automation and top-notch security, it's the perfect
              solution for teams looking to work smarter.
            </p>

            <img src="/home/ss.png" alt="" className="ai-screenshot" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ai;