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
  border: 1px solid ${props => props.theme.darkPurple};
  padding: 0.25rem 1rem;
  border-radius: 10px;
  color: ${props => props.theme.darkPurple};
  font-size: 1.25rem;

  &:hover { cursor: pointer };
`;