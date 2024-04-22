import styled from "styled-components"

export const Conteiner = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 18pt;
        margin: 20px;
        color: #747474;
    }
`;

export const AreaForm = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items:center;
`;
export const AreaInput = styled.div`
    width: 400px;
`;

export const Label = styled.label`
    font-size: 10pt;
    margin-left: 5px;
    color: #747474;
`;

export const Camp = styled.input`
    width: 97%;
    height: 45px;
    margin: 0px  5px 5px;
    padding-left: 10px;
    outline: none;
    background-color: #D9D9D9;
    color: #352C2C;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight:500;
    border: none;
`;
export const Button = styled.button`
    width: 97%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border: none;
    background-color: ${props => props.bkcolor};
`;