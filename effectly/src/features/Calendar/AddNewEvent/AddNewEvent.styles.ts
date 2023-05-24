import styled, { css } from "styled-components";
import { openModal, closeModal } from "../../../core/style/keyframes";

type ModalProps = {
  isOpened: boolean;
};

export const Close = styled.button`
  background-color: inherit;
  border: none;
  font-size: 1rem;
  margin-left: auto;
  margin-bottom: -0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Modal = styled.div<ModalProps>`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
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

export const Wrapper = styled.div`
  display: block;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 10px;
  width: 30%;
  margin-inline: auto;
  padding: 1.5rem;
`;

export const Form = styled.form`
  font-size: 1rem;
  background-color: transparent;
  flex: 1;

  .form-control {
    background-color: transparent;
    outline: none;
    border: 1px solid ${(props) => props.theme.darkPurple};
    border-radius: 10px;
    width: 100%;
    height: 3rem;
  }

  #all-day-label {
    margin-bottom: 0;
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
  width: auto;
  height: auto;
  padding: 0.5em;

  &[type="text"] {
    width: 100%;
    height: 50px;
    margin-bottom: 1rem;
  }

  &[type="checkbox"] {
    height: 25px;
    aspect-ratio: 1 / 1;
    appearance: none;
    -webkit-appearance: none;
    position: relative;

    &::before {
      content: "OK";
      font-size: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }

  &[type="checkbox"]:checked::before {
    display: block;
  }
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

  &:hover {
    cursor: pointer;
  }
`;

export const FlexBlock = styled.div`
  display: flex;
  background-color: transparent;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
`;
