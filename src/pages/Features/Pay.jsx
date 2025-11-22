import React from 'react'
import './Pay.scss'

export default function Pay() {
  return (
    <>

    <div className="home container">
        <div className="text-content">
        <h1>Main features of Brainwave</h1>
        <p>Here are some of the core features of Brainwavethat make it stand out from other chat applications</p>
        </div>
        <div className="img-content">
<picture>
  <source media="(max-width: 377px)" srcSet="/375px/pay.svg" />
  <source media="(max-width: 768px)" srcSet="/768px/pay.svg" />
  <source media="(max-width: 1024px)" srcSet="/1024px/pay.svg" />
  <img src="/1920px/pay.svg" alt="Brainwave features" className="pay-img" />
</picture>
        </div>
    </div>
    </>
  )
}
