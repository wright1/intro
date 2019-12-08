import React from "react";
import styled from "styled-components";
import { P } from "./styling/styles";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.img`
  width: 30vw;
  height: 20vh;
  margin: 2vw;
  margin-top: 8vh;
  border: 0.5px solid #140036;
  margin-left: 8rem;
  @media (min-width: 1024px) {
    width: 18vw;
    height: 20vh;
  }
`;
export const ProjectCard = ({ img, place, href }) => {
  return (
    <>
      <Div>
        <a href={place}>
          <Wrapper src={img} alt="project screenshot" />
        </a>
        <Div>
          <P>
            Full project details&nbsp;<a href={href}>HERE</a>
          </P>
        </Div>
      </Div>
    </>
  );
};

export default ProjectCard;
