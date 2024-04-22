import styled from "styled-components"

export const Conteiner = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

export const AreaProfile = styled.div`
    width: 70%;
    height: 30px;
    border: 1px solid #747474;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding:5px;
    margin: 2px;

    h4{
        text-align:end;
        font-size: 11pt;
        margin: 0;
        padding: 0;
        cursor:pointer;
    }
    
    select{
        background: none;
        color: #000;
        border: none;
        outline: none;
        cursor: pointer;
        
    }
`;
