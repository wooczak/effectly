import styled from "styled-components";

export const Wrapper = styled.section`
  width: 530px;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
`;

export const Form = styled.form.attrs((props) => ({
  method: props.method,
}))``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  gap: 0.75rem;
  position: relative;
`;

export const OrBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  &::before,
  &::after {
    display: block;
    width: 100%;
    height: 1px;
    content: "";
    background-color: ${(props) => props.theme.darkPurple};
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  required: props.required,
}))`
  height: 4rem;
  margin-bottom: 0.5rem;
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

export const PasswordVisibilityIcon = styled.img`
  position: absolute;
  right: 0.5rem;
  background: none;
  bottom: 0;
  height: 4rem;
`;
