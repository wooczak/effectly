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
  margin-block: 1rem;
  gap: 1rem;
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
  border-radius: 1rem;
  width: 100%;
`;
