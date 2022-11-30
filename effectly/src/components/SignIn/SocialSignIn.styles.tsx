import styled from "styled-components";

export const SignInBtn = styled.button`
    &:first-of-type {
        background: ${(props) => props.theme.googleButtonBg.normal};

        &:hover {
            background: ${(props) => props.theme.googleButtonBg.hover};
        }
    }

    &:last-of-type {
        background: ${(props) => props.theme.appleButtonBg};

        & > p { color: black; }
    }

    height: 4.5rem;
    width: 100%;
    border: none;
    border-radius: 10px;
    position: relative;
    margin-bottom: 2rem;

    &:hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        transform: scale(101%);
    }

    & > img, p { background-color: transparent; }
    & > img {
        height: 60%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0.5rem;
    }
`;