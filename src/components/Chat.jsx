import React from 'react'

export default function Chat() {
  return (
    <>
    <div className="chat">
        <div className="container">
            <div className="title">
                <h1>Chat Smarter, Not Harder with Brainwave</h1>
            </div>
            <div className="chat-item">
                <picture>
                    <source media="(max-width:1440px)"srcSet='/1440px/cards.svg' />
                    <source media="(max-width:1200px)"srcSet='/1200px/cards.svg' />
                    <source media="(max-width:1024px)"srcSet='/1024px/cards.svg' />
                    <source media="(max-width:768px)"srcSet='/768px/cards.svg' />
                    <source media="(max-width:375px)"srcSet='/375px/cards.svg' />
                    <img className='cards' src="/1920px/cards.svg" alt="" />
                </picture>
            </div>
        </div>
    </div>
    </>
  )
}
