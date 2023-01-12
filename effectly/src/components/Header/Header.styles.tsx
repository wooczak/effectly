import styled from "styled-components";

export const HeaderWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-radius: 10px;
`;

export const Logo = styled.h1`
  background-color: transparent;
  font-weight: 600;
  font-size: 2rem;
`;
