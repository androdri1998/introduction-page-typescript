import React from "react";

import ItemSkill from "../ItemSkill";

import { Container } from "./styles";

import { IPropsPresentation } from "./types";

const LIMIT_SKILLS = 5;

const ListSkillsPresentation: React.FC<IPropsPresentation> = ({ skills }) => {
  return (
    <Container>
      {skills.slice(0, LIMIT_SKILLS).map((skill, index) => (
        <ItemSkill
          key={index}
          percentage={skill.percentage}
          technology={skill.technology}
          background={skill.color}
        />
      ))}
    </Container>
  );
};

export default ListSkillsPresentation;
