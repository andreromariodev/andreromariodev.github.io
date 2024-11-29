import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  position: sticky;
  z-index: 100;
  background-color: var(--thirtiary);

  @media (max-width: 1024px) {
    padding: 15px 0;
  }
`;

export const Desktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const LangSwitcher = styled.div`
  display: flex;

  button {
    cursor: pointer;
    margin: 0 5px;
    padding: 0;
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: none;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  /* justify-content: center; */

  @media (max-width: 1024px) {
    &.-active {
      display: grid;
    }

    display: none;
    flex-direction: column;
    width: 100%;
  }
`;

export const MenuItem = styled.li`
  list-style: none;

  @media (max-width: 1024px) {
    width: 100%;
  }

  a {
    @media (max-width: 1024px) {
      width: 100%;
      padding: 15px 0;
    }

    display: inline-flex;
    padding: 15px;
  }
`;

export const MobileToggle = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 20px;
    text-transform: uppercase;
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: var(--white);
    font-weight: bold;
    margin-left: 10px;

    svg {
      width: 30px;
      height: 30px;
      fill: var(--white);
    }
  }

  .mobileAside {
    display: flex;
    align-items: center;
  }
`;

export default Header;
