import styled from "styled-components"

export const Conteiner = styled.div`
    width: 65vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    border: 1px solid red;
    h2{
        width: 46vw;
        font-size: 12pt;
        font-weight: 400;
        text-align: center;
        font-style: oblique;
    }
    span{
        color: green;
    }
`;

export const Area = styled.form`
    width: 65vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const AreaBook = styled.div`
    width: 46vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const LogoImg = styled.img`
    width: 156px;
    height: 230px;
    border: 1px solid #fff;
`;
export const AreaCase = styled.div`
    width: 170px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #276299;

`;
export const Preview = styled.label`
    cursor: pointer;
    width: 156px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
 
    p{
        color: #747474;
        font-size: 9pt;
    }
`;
export const SeachPDf = styled.label`
        width: 98%;
        height: 30px;
        background-color:${props => props.bkcolor ? "#e63333" : "#3a7a2d"};
        border: none;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px;
        cursor: pointer;
        font-size: 14px;
        color:#fff;
`;

export const AreaForm = styled.div`
    width: 33.6vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5px;
    
    input,select{
        color: #747474;
        width: 100%;
        height: 40px;
        outline: none;
        background-color: #D9D9D9;
        border: none;
        padding-left: 6px;
    }

    textarea{
        color: #747474;
        width: 100%;
        height: 200px;
        border: none;
        background-color: #D9D9D9;
        padding-left: 6px;
        outline: none;
    }

    button{
        background-color:#276299;
        border: none;
        width: 100%;
        height: 40px;
  
    }
`;
export const AreaAction = styled.div`
    width: 46vw;
    height: 253px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    textarea{
        color: #747474;
        width: 100%;
        height: 200px;
        border: none;
        background-color: #D9D9D9;
        padding-left: 6px;
        outline: none;
        resize: none;
    }

    button{
        background-color:#276299;
        border: none;
        width: 100%;
        height: 40px;
    }
    
    input[type=file]{
        display: none;
    }
`;
