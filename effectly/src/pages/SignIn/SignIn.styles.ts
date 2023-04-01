import styled from "styled-components";

export const Wrapper = styled.section`
  width: 450px;
  margin: auto;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  text-align: left;
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

export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0;

  & > p {
    display: block;
    margin: 0;
  }
`;

export const LogInBtn = styled.button`
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%;
  color: ${(props) => props.theme.black};
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  font-size: inherit;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
