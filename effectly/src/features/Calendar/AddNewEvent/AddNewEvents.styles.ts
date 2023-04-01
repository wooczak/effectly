import styled from "styled-components";

export const Modal = styled.div`
  display: block;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  position: absolute;
  top: 0;

  & > p {
    background-color: transparent;
  }
`;
