import styled, { keyframes } from "styled-components";

export const Footer = styled.footer`
  margin-top: 60px;
  padding: 20px 0;
  background-color: var(--thirtiary);

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

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const LinkWhatsapp = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  animation: ${pulse} 2s infinite; /* Animação de pulsação */
`;

export default Footer;
