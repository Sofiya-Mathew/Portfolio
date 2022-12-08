import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '', text: 'Published a paper on Intrusion Detection.'},
  { number: '', text: 'Served as a volunteer in Reboot Kerala Hackathon 2020', },
  { number: '', text: '5 Days of industrial training in Android Application Development', },
  { number: '', text: 'Participated in KTU TECHFEST 2019', }
];

const Acomplishments = () => (
<Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{`${card.number}+`}</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>);

export default Acomplishments;
