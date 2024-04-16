import styled from "styled-components";

export const Container = styled.div`
    width: 151px;
    height:270px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 2.2px;
    cursor: pointer;
    border-radius:5px;
    box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    
`;


export const LogoImg = styled.img`
    width: 140px;
    height: 200px;
    
`;

export const AreaInfo = styled.div`
    width: 140px;
    /* height: 77px; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;

    svg{
        margin-right: 4px;
    }

    h1{
        color: #747474;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
    }
`;
export const AreaAction = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
export const Area = styled.div`
    width: 60px;  
    display: flex;
    justify-content:${props => props.pos};
    flex-direction: row;
    align-items: center;

    span{
        color: #747474;
        font-size: 10px;
        margin-right: 1px;
    }

    p{
        color: #747474;
        font-size: 10px;
        margin: 0;
    }

`;
