import React from 'react'
import Community from '../../components/Price/community/Community'
import Pay from '../../components/Price/pay/Pay'
import PricingTable from '../../components/Price/pricingTable/PricingTable'
import Brainwave from '../../components/Features/brainwave/Brainwave'
import Questions from '../../components/Price/questions/Questions'

export default function Price() {
  return (
    <>
    <Pay/>
    <section>
      <PricingTable/>
    </section>
    <section>
      <Community/>
    </section>
    <section>
      <Questions/>
    </section>
    <section>
      <Brainwave/>
    </section>
    </>
  )
}
