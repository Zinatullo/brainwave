import React from "react";
import "./Getting.scss";
const cards = [
  {
    h3: "Sign Up",
    span: "[ 01 ]",
    img: "/HowToUse/signup.png",
    p: `To create an account with Brainwave - AI chat app, all you need to do is provide your name, email address, and password. Once you have signed up, you will be able to start exploring the app's various features. Brainwave's AI chat system is designed to provide you with an intuitive, easy-to-use interface that makes it simple to chat with friends and family, or even with new acquaintances.In addition, the app is constantly being updated with new features and improvements, so you can expect it to continue to evolve and improve over time. Whether you are looking for a simple chat app, or a more advanced platform that can help you stay connected with people from all over the world, Brainwave is the perfect choice.`,
  },
  {
    h3: "Connect with AI Chatbot",
    span: "[ 01 ]",
    img: "/HowToUse/connect.png",
    p: "Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to understand your queries and provide relevant responses.",
  },
  {
    h3: "Get Personalized Recommendations",
    span: "[ 01 ]",
    img: "/HowToUse/rec.png",
    p: "Based on the conversation with the AI chatbot, you will receive personalized recommendations related to your queries. The chatbot is trained to understand your preferences and provide customized suggestions.",
  },
  {
    h3: "Explore and Engage",
    span: "[ 01 ]",
    img: "/HowToUse/explore.png",
    p: "Explore the recommendations provided by the AI chatbot and engage with the app. You can ask questions, provide feedback, and share your experience with the chatbot.",
  },
];
export default function Getting() {
  return (
    <div className="getting">
      <div className="container">
        <div className="getting-title">
          <h1>How to use</h1>
          <p>
            Get started with Brainwave - AI chat app today and experience the
            power of AI in your conversations!
          </p>
        </div>

        <div className="getting-bar">
          <img src="/HowToUse/search.png" alt="search icon" />
          <input type="text" placeholder="Search topic" />
        </div>
        <div className="getting-item">
          <div className="getting-wrapper">
            <div className="getting-div">
              <img src="/HowToUse/arrow.png" alt="" />
              <h3>Getting started</h3>
            </div>
            <div className="getting-helper">
              <h4>Sign up</h4>
              <h4>Getting started</h4>
              <h4>Get personalized</h4>
              <h4>Explore and engage</h4>
            </div>
            <div className="getting-div">
              <img src="/HowToUse/arrow-2.png" alt="" />
              <h3>Pricing plans</h3>
            </div>
            <div className="getting-div">
              <img src="/HowToUse/arrow-2.png" alt="" />
              <h3>Core features</h3>
            </div>
            <div className="getting-div">
              <img src="/HowToUse/arrow-2.png" alt="" />
              <h3>Roadmap</h3>
            </div>
            <div className="getting-div">
              <img src="/HowToUse/arrow-2.png" alt="" />
              <h3>Enhanced features</h3>
            </div>
            <div className="getting-div">
              <img src="/HowToUse/arrow-2.png" alt="" />
              <h3>Help and support</h3>
            </div>
          </div>
          {/* wrapper */}
          <div className="getting-content">
            <div className="getting-content-title">
              <h2>Getting started</h2>
            </div>
            {/* card */}
            <div className="getting-cards">

            {cards.map((el) => (
              <div className="getting-card">
                <div className="getting-content-div">
                  <h3>{el.h3}</h3>
                  <span>{el.span}</span>
                </div>
                <img width={896} height={600} src={el.img} alt="" />
                <p>{el.p}</p>
                
              </div>
            ))}
          <button className="btn-active getting-btn">load more</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
