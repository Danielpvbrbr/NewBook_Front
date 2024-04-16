import styled from "styled-components"

export const Conteiner = styled.div`
    width: 65vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
    
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

export const Area = styled.div`
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
    cursor: pointer;
`;
export const LogoImg = styled.img`
    width: 156px;
    height: 230px;
`;
export const AreaCase = styled.div`
    width: 170px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #276299;
`;
export const AreaForm = styled.div`
    width: 33.6vw;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-left: 5px;
    
    input,select{
        color: #747474;
        width: 100%;
        height: 45px;
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
    }

    button{
        background-color:#276299;
        border: none;
        width: 100%;
        height: 40px;
      
    }
`;
