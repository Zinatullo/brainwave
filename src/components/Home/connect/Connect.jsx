import React from "react";
import "./Connect.scss";

const steps = [
  {
    id: 1,
    img: "/home/top.svg",
    number: "01.",
    title: "Sign up",
    desc: "",
  },
  {
    id: 2,
    img: "/home/tops.svg",
    number: "02.",
    title: "Connect with AI Chatbot",
    desc: "Create an account with Brainwave - AI chat app by providing your name, email",
  },
  {
    id: 3,
    img: "/home/top.svg",
    number: "03.",
    title: "Get Personalized Recommendations",
    desc: "",
  },
  {
    id: 4,
    img: "/home/top.svg",
    number: "04.",
    title: "Explore and Engage",
    desc: "",
  },
];

export default function Connect() {
  return (
    <section className="connect">
      <div className="connect-inner">

        <div className="connect-main">
          <div className="connect-image">
            <img src="/home/ims.png" alt="" />
          </div>

          <div className="connect-text">
            <p className="connect-label">[ how it work: 02. ]</p>
            <h2 className="connect-title">Connect with AI chat bot</h2>
            <p className="connect-desc">
              Connect with the AI chatbot to start the conversation. The chatbot
              uses natural language processing to understand your queries and
              provide relevant responses.
            </p>
            <button className="connect-btn btn-active">Connect now</button>
          </div>
        </div>

        <div className="connect-steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <img src={step.img} alt="" />
              <div className="step-info">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}