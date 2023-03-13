import styled from "styled-components";

export const DatePickerWrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: inherit;
  color: ${(props) => props.theme.white};
  font-size: 1.6rem;
  z-index: 999;
  font-weight: 500;
  font-family: 'Clash Display', sans-serif;
`;

export const Arrow = styled.img`
  background-color: transparent;
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;
