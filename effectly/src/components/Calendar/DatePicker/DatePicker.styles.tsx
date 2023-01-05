import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  background-color: inherit;
`;

export const Arrow = styled.img`
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
