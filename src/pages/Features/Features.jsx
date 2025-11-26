import React from 'react';
import Pay from '../../components/Features/pay/Pay';   
import Cards from '../../components/Features/cards/Cards';
import Customization_1 from '../../components/Features/customization_1/Customization_1';
import Customization_2 from '../../components/Features/customization_2/Customization_2';
import Customization_3 from '../../components/Features/customization_3/Customization_3';
import Comment from '../../components/Features/comment/Comment';
import Generetive from '../../components/Features/generative/Generetive';
import Brainwave from '../../components/Features/brainwave/Brainwave';
export default function Features() {

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
        <Customization_3/>
      </section>  
      <section>
<Comment/>
      </section>
      <section>
        <Generetive/>
      </section>
      <section>
        <Brainwave/>
      </section>
      </>
  );
}