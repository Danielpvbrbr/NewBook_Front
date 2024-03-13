import { useContext } from 'react';
import { Conteiner, Nav } from './styles';
import { AuthContext } from '../../Context/AuthContext';

export default function Navigation() {
    const { route, setRoute } = useContext(AuthContext);
    const name = "Usuário";

    return (
        <Conteiner>
            <Nav onClick={() => setRoute({ route: "initial", data: {} })} color={"initial" == route.route ? "#276299" : "#747474"}>Inicio</Nav>
            <Nav onClick={() => setRoute({ route: "favorite", data: {} })} color={"favorite" == route.route ? "#276299" : "#747474"}>Favoritos</Nav>
            <Nav onClick={() => setRoute({ route: "upload", data: {} })} color={"upload" == route.route ? "#276299" : "#747474"}>Enviar Livro</Nav>
            <Nav onClick={() => setRoute({ route: "account", data: {} })} color={"account" == route.route ? "#276299" : "#747474"}>Olá, {name}</Nav>
        </Conteiner>
    )
}