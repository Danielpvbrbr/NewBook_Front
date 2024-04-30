import styled from "styled-components"

export const Conteiner = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    
`;

export const AreaImg = styled.div`
    width: 65vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const LogoImg = styled.img`
    width: 250px;
    height: 320px;
`;

export const Info = styled.div`
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column ;
    justify-content: space-between;
    padding: 0px 5px;

    h3{
        font-size: 14pt;
    }
`;

export const ButtonAction = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;

    svg{
        font-size: 15pt;
    }
`;
export const BtnDonw = styled.button`
    width: 200px;
    height: 35px;
    background-color: #276299;
    border: none;
`;

export const SubInfo = styled.div`
    width: 300px;

    p{
        font-size: 10pt;
    }
    span{
        font-size: 9pt;
        font-style: italic;
    }
`;

export const AreaDesc = styled.div`
    width: 65vw;
    margin-top: 30px;

    h1{
        color: #276299;
        font-size: 15pt;
        text-align: center;
    }
    p{
        font-size: 11pt;
        font-weight: 300;
        text-align: start;
    }
`;

export const AreaBooks = styled.div`
    width: 66vw;

    h3{
        color: #276299;
        text-align: center  ;
        font-size: 10pt;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    section{
        display: flex;
        flex-wrap:wrap;
        flex-direction: row;
        justify-content: start;
       
    }
`;
