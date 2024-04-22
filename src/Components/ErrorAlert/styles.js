import styled from "styled-components";

export const Container = styled.div`
    width: 97%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AreaError = styled.div`
    width: 100%;
    height:25px;
    border: 1px solid red;
    display: flex;
    justify-content: start;
    align-items: center;
    padding:10px;
    margin: 1px;

    p{
        font-size: 8pt;
        padding: 0;
        margin: 0;
    }
`;