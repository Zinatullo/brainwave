import React from 'react';
import MainLayout from '../../layout/MainLayout'; // проверь путь!
import Pay from './Pay';   // ← вот это главное
import Cards from './Cards';
import Customization_1 from './Customization_1';
import Customization_2 from './Customization_2';
export default function Features() {
  console.log('Features page rendered'); // ← добавь это!!!

  return (
    <>
    <section>
      <Pay />
    </section>
      <section>
      <Cards/>
      </section>
      <section>
        <Customization_1/>
      </section>
      <section>
        <Customization_2/>
      </section>
            <section>
        <Customization_1/>
      </section>  
      </>
  );
}