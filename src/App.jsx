import Route from "./Views/Route";
import Logo from "./Components/Logo/"
import Navigation from "./Components/Navigation/"
import styled from "styled-components"
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";

export default function App() {
  const { darkMode } = useContext(AuthContext);

  return (
    <Conteiner darkMode={darkMode}>
      <Logo />
      <NavigationArea>
        <Navigation />
      </NavigationArea>
      <Route />
    </Conteiner>
  )
}

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#ececec;
   
`;
export const NavigationArea = styled.div`
    width: 65vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


