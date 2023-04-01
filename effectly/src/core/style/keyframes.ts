import { keyframes } from "styled-components";

export const openModal = keyframes`
    0% { transform: scale(0); opacity: 0 }
    80% { transform: scale(1.25); opacity: 0.65}
    100% { transform: scale(1); opacity: 1; }
`;

export const closeModal = keyframes`
    0% { transform: scale(1); opacity: 1 }
    40% { transform: scale(1.25); opacity: 0.65 }
    100% { transform: scale(0); opacity: 0 }
`;