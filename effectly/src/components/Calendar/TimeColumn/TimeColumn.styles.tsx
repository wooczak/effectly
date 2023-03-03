import styled from "styled-components";

export const HourStamp = styled.p.attrs((props) => ({
  // @ts-ignore
  gridRow: props.gridRow,
}))`
  background-color: transparent;
  margin-block: 0;
  grid-row: ${(props) => props.gridRow} / ${(props) => props.gridRow + 1};
`;
