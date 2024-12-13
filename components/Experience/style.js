import styled from "styled-components";

export const Experience = styled.div`
  &:hover,
  &.latest {
    border-color: var(--primary);
  }
  
  border: 3px solid transparent;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--smoke_dark);
  color: var(--white);
  transition: all .3s;
  box-sizing: border-box;

  ul {
    margin-left: 20px;
  }
`;
