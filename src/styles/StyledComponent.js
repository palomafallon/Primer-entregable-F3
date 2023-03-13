import styled, { css } from "styled-components";

export const FormContainer = styled.div`
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 10px;
    border-radius: 10px;
    border: 2px solid #121212;
    background-color: #b35517;
`;

export const Container = styled.div`  
    display: flex;
    flex-direction: column;
    text-align: left;
    ${({ content }) => content === "row" && css`
        width: 100%;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
    `}
`;

export const ContainerCinefilo = styled.div`  
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #121212;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 35px;
`;

export const TitleUser = styled.h1`
    text-align: center;
    font-size: 40px;
`;

export const Error = styled.p `
    color: #121212;
    font-size: "10px"; 
    padding: 1px;
    margin: 1px 0 0 6px; 
    font-style: italic;
    font-family: monospace;
`;

export const Information = styled.h3 `
    color: #C70039;
    font-size: 22px;
`;

export const UserInformation = styled.span `
    color: #000000;
    font-size: 30px;
    text-shadow: 5px 4px 3px ;
`;