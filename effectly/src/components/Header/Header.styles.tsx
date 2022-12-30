import styled from "styled-components";

export const HeaderWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  border-radius: 10px;
`;
