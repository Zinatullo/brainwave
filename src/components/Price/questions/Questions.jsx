import React from "react";
import './Questions.scss'
export default function Questions() {
  return (
    <>
      <div className="quest">
        <div className="container">
          <div className="questions-item">
            <div className="questions-about">
              <h2>Frequently asked questions</h2>
              <p>Haven’t found what you’re looking for?</p>
            </div>
            <div className="questions-content">
              <div className="q-content-1">
                <div className="q-content">
                <h3>What is Brainwave - AI chat app?</h3>
<span>-</span>
                </div>
                <p>
                  Brainwave - AI chat app is a chatbot-powered app that provides
                  personalized recommendations to users based on their
                  preferences. The app uses natural language processing to
                  understand user queries and provide accurate and relevant
                  responses. With Brainwave, users can get customized
                  suggestions for everything from meal planning to exercise
                  routines, making it easier to achieve their goals and live a
                  healthier lifestyle.
                </p>
              </div>
              <div className="q-content">
                <h3>How does Brainwave - AI chat app work?</h3>
                <span>+</span>
              </div>
              <div className="q-content">
                <h3>What are the core features of Brainwave?</h3>
                <span>+</span>
              </div>
              <div className="q-content">
                <h3>How much does Brainwave cost?</h3>
                <span>+</span>
              </div>
              <div className="q-content">
                <h3>How can I get started with Brainwave?</h3>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
