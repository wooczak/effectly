import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  background-color: inherit;
  color: ${(props) => props.theme.darkPurple};
  font-size: 1.25rem;
`;

export const Arrow = styled.img`
  background-color: transparent;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;
