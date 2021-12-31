import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection> 
      <SectionTitle main center>
        I'm Brandon... <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        To Be a Front-End Developer in 2021...what a time to be alive!
      </SectionText>
      <Button onClick={() => window.location ='https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;