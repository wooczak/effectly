import styled, { css } from "styled-components";
import { openModal, closeModal } from "../../../core/style/keyframes";

type IProps = {
  isOpened: boolean;
};

export const Modal = styled.div<IProps>`
  display: block;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 5px;
  position: absolute;
  width: 80%;
  height: 80%;
  margin: 1rem;
  animation: ${(props) =>
    props.isOpened
      ? css`
          ${openModal} 0.5s forwards
        `
      : css`
          ${closeModal} 0.5s forwards
        `};

  & > p {
    text-align: center;
    background-color: transparent;
  }
`;

export const Form = styled.form``;

export const Label = styled.label``;

export const Input = styled.input``;