import React from 'react'
import './Home.scss'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-title">
        <h1>Explore the Possibilities of AI Chatting with Brainwave</h1>
        <p>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
        <button>Get started</button>
      </div>
      
      <img src="/rgb.png" alt="" className="absolute" />
      
      <picture>
        <source 
            media="(max-width: 376px)" 
            srcSet='/375px/browser.ghost.png' 
        />
        <source 
            media="(max-width: 769px)" 
            srcSet='/768px/browser.ghost.svg' 
        />
        <source 
            media="(max-width: 1024px)" 
            srcSet='/1024px/browser.ghost.svg' 
        />
        <img 
            src="/ghost browser.svg" 
            alt="AI Chat Interface" 
            className="ghost-browser"
        />    
      </picture>
      
      <img className='around' src="/around.png" alt="" />
      <img className='blur' src="/blur.png" alt="" />
      <img src="/overlay background.png" alt="" className="overlay" />
   
      <div className="logos-nav">
        <div>
          <img src="/logos/fusion.png" alt="Fusion" />
          <span>fusione</span>
        </div>
        <div>
          <img src="/logos/fusion.png" alt="Techno" />
          <span>techno</span>
        </div>
        <div>
          <img src="/logos/fusion.png" alt="Your Logo" />
          <span>yourlogo</span>
        </div>
        <div>
          <img src="/logos/fusion.png" alt="OpenAI" />
          <span>openai</span>
        </div>
      </div>
    </div>
  )
}