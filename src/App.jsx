import Route from "./Views/Route";
import Logo from "./Components/Logo/"
import Navigation from "./Components/Navigation/"
import styled from "styled-components"

export const Conteiner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const NavigationArea = styled.div`
    width: 65vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {

  return (
    <Conteiner>
      <Logo />
      <NavigationArea>
        <Navigation />
      </NavigationArea>
      <Route />
    </Conteiner>
  )
}

export default App
