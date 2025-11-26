import React from 'react'
import './Comment.scss'
export default function Comment() {
  return (
    <>
    <div className="comment">
        <div className="container">
            <picture>
                <source media="(max-width:375px)" srcset="/375px/comment.svg" />
                <source media="(max-width:768px)" srcset="/768px/comment.svg" />
                <source media="(max-width:1024px)" srcset="/1024px/comment.svg" />
                <source media="(max-width:1200px)" srcset="/1200px/commnet.svg" />
                <source media="(max-width:1440px)" srcset="/1440px/comment.svg" />
                <img src="/1920px/comment.svg" className='img-com' alt="" />
            </picture>
            <h2>I was blown away by the accuracy and speed of the AI chatbot on Brainwave. It was able to understand my queries and provide relevant recommendations in seconds.</h2>
        </div>
    </div>
    </>
  )
}
