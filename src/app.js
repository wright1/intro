import React from "react";
import { Section, GlobalStyle, ProjSection } from "./components/styling/styles";
import image from "./images/stars.jpg";
import self from "./images/selfImage.jpg";
import white from "./images/white.png";
import blue from "./images/blue.png";
import food from "./images/food.png";
import namegame from "./images/namegame.png";
import cake from "./images/cake.png";
import search from "./images/search.png";
import spell from "./images/spellchecker.png";
import { Title } from "./components/title";
import { Blurb } from "./components/blurb";
import { Name } from "./components/name";
import { Chevron } from "./components/link";
import { ImagePanel, Head, P, TopDiv } from "./components/styling/styles";
import { Top } from "./components/top";
import { ProjectCard } from "./components/projectCard";

export default class App extends React.Component {
  state = {
    start: []
  };

  render() {
    const width = window.innerWidth < 420;
    return (
      <>
        <GlobalStyle />
        <Section img={image} attachment={"fixed"} id="title">
          <Title />
          <Chevron image={white} place="about" />
        </Section>
        {width ? (
          <Section img={self} id="about">
            <Name />
            <Blurb />
            <Chevron image={white} place="projects" />
          </Section>
        ) : (
          <Section id="about">
            <Name />
            <Blurb />
            <ImagePanel className="panel" />
            <Chevron image={blue} place="projects" />
          </Section>
        )}

        <ProjSection id="projects">
          <Head>Projects</Head>
          <TopDiv>
            <P>Click images for live sites</P>
          </TopDiv>
          <ProjectCard
            img={namegame}
            place="https://namegame.netlify.com"
            href="https://github.com/wright1/animals"
          />
          <ProjectCard
            img={cake}
            place="https://justdesserts.netlify.com/"
            href="https://github.com/wright1/cake"
          />
          <ProjectCard
            img={ search }
            place="https://quizzical-williams-fb1c29.netlify.com/"
            href="https://github.com/wright1/resonate"
            />
          <ProjectCard
          img={spell}
          place="https://github.com/wright1/spellchecker2"
          href="https://github.com/wright1/spellchecker2"
          />
          <ProjectCard
          img={food}
          place="https://trjfpapp.herokuapp.com/"
          href="https://github.com/fac-15/the-real-junk-food-project"
          />
          <Top />
        </ProjSection>
      </>
    );
  }
}

// down chevron <div>Icons made by <a href="https://www.flaticon.com/authors/amit-jakhu" title="Amit Jakhu">Amit Jakhu</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
