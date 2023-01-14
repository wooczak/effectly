import styled from "styled-components";

export const HeaderWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-radius: 10px;
`;

export const Logo = styled.h1`
  background-color: transparent;
  font-weight: 600;
  font-size: 2rem;
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.darkPurple};
  padding: 0.25rem 1rem;
  border-radius: 10px;
  color: ${(props) => props.theme.darkPurple};
  font-size: 1.25rem;
  height: 33px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  background-color: transparent;
  display: flex;
  gap: 1rem;
`;

export const ThemeToggle = styled.button`
  width: 60px;
  height: 33px;
  position: relative;
  background-color: ${(props) => props.theme.darkPurple};
  border: none;
  border-radius: 10px;
  padding-inline: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Toggle = styled.div`
  position: absolute;
  top: 4px;
  right: ${props => props.toggled};
  transition: all 1s ease-in-out;
  border-radius: 10px;
  background-color: white;
  height: 25px;
  aspect-ratio: 1 / 1;
  z-index: 999;
`;
