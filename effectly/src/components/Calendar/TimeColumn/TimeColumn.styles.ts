import styled from "styled-components";

type IProps = { 
  gridRow: number;
}

export const HourStamp = styled.p<IProps>`
  background-color: transparent;
  margin-block: 0;
  grid-row: ${(props) => props.gridRow} / ${(props) => props.gridRow + 1};
  text-align: center;
`;
