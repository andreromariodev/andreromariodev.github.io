import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 60px;
  padding: 20px 0;
  background-color: var(--secondary);

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  svg {
    width: 60px;
    margin: 0 5px;
  }
`;

export default Footer;
