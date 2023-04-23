import styled, { css } from "styled-components";
import { openModal, closeModal } from "../../../core/style/keyframes";

type ModalProps = {
  isOpened: boolean;
};

export const Close = styled.button`
  background-color: inherit;
  border: none;
  font-size: 1.5rem;
  margin-left: auto;
`;

export const Modal = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 10px;
  position: absolute;
  width: 80%;
  height: 80%;
  margin: 1rem;
  padding: 1.5rem;
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

export const Form = styled.form`
  font-size: 1rem;
  background-color: inherit;
  flex: 1;

  .form-control {
    background-color: transparent;
    outline: none;
    border: 1px solid ${(props) => props.theme.darkPurple};
    border-radius: 10px;
    width: 100%;
    height: 3rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  background-color: inherit;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid ${(props) => props.theme.darkPurple};
  border-radius: 10px;
  width: 100%;
  height: 3rem;
  padding: 0.5em;
`;

export const SubmitBtn = styled.button`
  margin-top: 1rem;
  width: 50%;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  color: ${(props) => props.theme.black};
  font-weight: 500;
  font-size: 1rem;
  background-color: ${(props) => props.theme.darkPurple};
`;
