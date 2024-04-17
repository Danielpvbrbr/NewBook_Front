import styled from "styled-components";

export const Conteiner = styled.ul`
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    //border: 1px solid;
    :hover{
      color: #276299;
   }
`;

export const Nav = styled.li`
   color: ${props => props.color};
   font-weight: 500;
   padding-left: -20px;
   margin-left: -30px;
   cursor: pointer;
`;