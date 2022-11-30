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
