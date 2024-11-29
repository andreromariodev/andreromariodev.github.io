import styled from "styled-components";

export const Project = styled.div`
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
  max-height: 200px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  background-color: var(--thirtiary);
  padding: 5px;
  text-align: center;
`;

export default Project;
