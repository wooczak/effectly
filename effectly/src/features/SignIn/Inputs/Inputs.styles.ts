import styled from "styled-components";

export const Input = styled.input`
  height: 4rem;
  border-radius: 0.75rem;
  outline: none;
  border: 1px solid ${(props) => props.theme.inputBorder.normal};
  background: ${(props) => props.theme.inputBg};
  width: 100%;
  transition: all 0.1s ease-in-out;
  padding-inline: 1rem;
  font-size: 1.1rem;
  font-family: inherit;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.inputBorder.hover};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.inputBorder.active};
  }
`;

export const Label = styled.label`
  & > p { margin-top: 1rem; margin-bottom: 0.5rem; }
`;

export const PasswordEye = styled.img`
  position: absolute;
  right: 0.75rem;
  bottom: calc(2rem - 1px);
  transform: translateY(50%);
  &:hover { cursor: pointer };
  background: none;
`