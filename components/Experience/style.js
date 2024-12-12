import styled from "styled-components";

export const Experience = styled.div`
  &:hover,
  &.latest {
    color: var(--white);
  }

  padding: 20px;
  border-radius: 15px;
  background-color: var(--smoke_dark);
  color: var(--gray);
  transition: color .3s;

  ul {
    margin-left: 20px;
  }
`;
