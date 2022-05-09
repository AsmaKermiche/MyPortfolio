import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm Asma KERMICHE, a 4th year student at ESI Algiers (Higher National School of Computer Science) and a future Software Enginner. I have an experience in building Mobile applications using Flutter and implementing websites using HTML, CSS, Bootstrap, Javascript and PHP. I'm interested by Maching and Deep Learning.     
      </SectionText>
    </Section>
  );
};

export default Timeline;
