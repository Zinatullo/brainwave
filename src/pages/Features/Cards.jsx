import React from 'react';
import './Cards.scss';

export default function Cards() {
  return (
    <div className="cards container">
      <div className="card">
        <img src="/other/card-1.svg" alt="Advanced integrations" />
        <h3>Advanced integrations</h3>
        <p>Allow the chatbot to integrate with a wider range of enterprise software...</p>
      </div>

      <div className="card">
        <img src="/other/card-2.svg" alt="White-labeling" />
        <h3>White-labeling</h3>
        <p>Offer a white-label version of the app that enterprises can rebrand...</p>
      </div>

      <div className="card">
        <img src="/other/card-3.svg" alt="Customizable branding" />
        <h3>Customizable branding</h3>
        <p>Allow enterprises to customize the app's branding and user interface...</p>
      </div>

      <div className="card">
        <img src="/other/card-4.svg" alt="Customized training" />
        <h3>Customized training</h3>
        <p>Offer customized training programs to help enterprises train their employees...</p>
      </div>

      <div className="card">
        <img src="/other/card-2.svg" alt="Enhanced security" />
        <h3>Enhanced security</h3>
        <p>Implement enhanced security measures, such as multi-factor authentication...</p>
      </div>

      <div className="card">
        <img src="/other/card-1.svg" alt="Multi-agent support" />
        <h3>Multi-agent support</h3>
        <p>Allow multiple agents to interact with the chatbot simultaneously...</p>
      </div>
    </div>
  );
}