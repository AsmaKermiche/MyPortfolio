import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { NavLink } from '../Header/HeaderStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm Asma KERMICHE <br />
        Flutter and NodeJS Developer <br />
        Graphic and UI/UX Designer <br />
        DL Enthusiast
        </SectionText>
        <Link href="https://drive.google.com/file/d/1DBGuBsgK_iQZgavvPPVNJk4jS1swZ86o/view?usp=sharing">
        <Button>
          <NavLink>My CV</NavLink>
        </Button> 
        </Link>
          
      </LeftSection>
    </Section>
  </>
);

export default Hero;