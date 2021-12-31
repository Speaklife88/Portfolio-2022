import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection> 
      <SectionTitle main center>
        I'm Brandon... <br />
        Welcome To My Web Dev Portfolio
      </SectionTitle>
      <SectionText>
        To Be A Developer in 2022...What A Time To Be Alive!
      </SectionText>
      <Button onClick={() => window.location ='https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;