import styled from "styled-components";

export const Project = styled.div`
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }

  display: grid;
  grid-template-columns: 50% 48%;
  justify-content: space-between;
  
  p {
    margin-bottom: 15px;
  }
`;

export const Title = styled.div`
  background-color: var(--thirtiary);
  padding: 5px;
  margin-bottom: 25px;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--primary);
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default Project;
