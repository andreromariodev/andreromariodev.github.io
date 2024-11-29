import styled from "styled-components";

export const Picture = styled.figure`
  overflow: hidden;
  margin: auto;
  display: inline-flex;
  
  img {
    border-radius: 50%;
    margin: auto;
  }
`;

export const Academic = styled.div`
  display: grid;
  gap: 30px;
`;

export const Stacks = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    list-style: none;
    display: inline-flex;
    align-items: center;
    margin: 15px 25px;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: var(--white);
    margin-right: 5px;
  }
`;

export const SocialLink = styled.a`
  display: flex;

  img {
    width: 30px;
  }
`;

export const ProfessionalExperiences = styled.div`
  display: grid;
  gap: 30px;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, auto));
  justify-content: space-between;
  column-gap: 30px;
  row-gap: 30px;
`;

export default Picture;
