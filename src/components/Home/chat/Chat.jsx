import React from "react";
import "./Chat.scss";

const messages = [
  {
    id: 1,
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    img: "/other/card-1.svg",
    arrow: "/left.svg",
    linkText: "Explore more",
  },
  {
    id: 2,
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and",
    img: "/other/card-2.svg",
    arrow: "/left.svg",
    linkText: "Explore more",
  },
  {
    id: 3,
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    img: "/other/card-3.svg",
    arrow: "/left.svg",
    linkText: "Explore more",
  },
  {
    id: 4,
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    img: "/other/card-4.svg",
    arrow: "/left.svg",
    linkText: "Explore more",
    w:50
  },
];

export default function Chat() {
  return (
    <section className="chat-section">
      <div className="chat-container">
        <header className="chat-header">
          <h2 className="chat-title">
            Chat Smarter, Not Harder with Brainwave AI
          </h2>
        </header>

        <div className="cards-wrapper">
          {messages.map((item) => (
            <article key={item.id} className="chat-card">
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>

              <div className="card-footer">
                <img src={item.img} alt="" className="card-icon" />
                <button className="card-link">
                  {item.linkText}
                  <img src={item.arrow} alt="" className="arrow-icon" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="logos">
          <img src="/s.svg" alt="" />
          <img src="/sb.svg" alt="" />
          <img src="/s.svg" alt="" />
          <img src="/s.svg" alt="" />
        </div>
      </div>
    </section>
  );
}