import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML, CSS, Javascript, Jquery, Bootstrap, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJS, PHP, and Databases (MySQL, Oracle, MongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile DEV</ListTitle>
          <ListParagraph>
            Experience with <br />
            Flutter and Kotlin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX and Graphic Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Adobe XD, Figma, Adobe Illustrator and Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Testing tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            like Junit, , Mockito, Pitest, Selenium and Cucumber
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Quality assurance tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            SonarQube
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Jenkins
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Build Automation tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Gradle
          </ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Deep Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </Section>
);

export default Technologies;
