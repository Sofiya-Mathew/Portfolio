import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello I'm Sofiya Mathew
        </SectionTitle>
        <SectionText>
          I'm a Fullstack software engineer who is passionate about creating beautiful and scalable fullstack products with great user experiences
       </SectionText>
        <Button onClick={props.handleClick}>Know More</Button>
      </LeftSection>
    </Section>
  </>);

export default Hero;