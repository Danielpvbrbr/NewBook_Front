import styled from "styled-components";

export const Container = styled.div`
   width: 65vw;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
export const SearchArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 54vw;
    height: 35px;
    border: 1px solid #747474;
    border-top-left-radius: 8px;
    border-bottom-left-radius:8px;
`;
export const InpSearch = styled.input`
    width: 52vw;
    height: 30px;
    color: #000;
    background-color: #fff;
    border: none;
    outline: none;
`;

export const SelectCategory = styled.select`
    width: 150px;
    height: 35px;
    color: #fff;
    background-color: #276299;
    border-top-right-radius: 8px;
    border-bottom-right-radius:8px;
    outline: none;
    border: none;
`;