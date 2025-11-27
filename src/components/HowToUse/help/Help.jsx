import React from "react";
import './Help.scss'
export default function Help() {
  return (
    <>
      <div className="help">
        <div className="container">
            <img src="/HowToUse/corners.png" className="help-corners" alt="" />
          <div className="help-item">
            <div className="help-img">
              <img src="/HowToUse/help.png" alt="" />
            </div>
            <div className="help-content">
              <h2>Need help?</h2>
              <p>Can’t find your answer, contact us</p>
              <div className="help-div">
                <img
                  width={80}
                  height={80}
                  src="/HowToUse/help-house.png"
                  alt=""
                />
                <div className="help-text">
                  <span>Join our community</span>
                  <p>Discuss anything with other users</p>
                </div>
              </div>
              <div className="help-div">
                <img
                  width={80}
                  height={80}
                  src="/HowToUse/help-house.png"
                  alt=""
                />
                <div className="help-text">
                  <span>Join our community</span>
                  <p>Discuss anything with other users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
