import { useContext } from 'react';
import { Conteiner, Nav } from './styles';
import { AuthContext } from '../../Context/AuthContext';

export default function Navigation() {
    const { route, setRoute, authenticated } = useContext(AuthContext);
    const name = !!authenticated && authenticated.user;
    const isAut = !!authenticated;

    const onActionReload = () => {
        location.reload();
        setRoute({ route: "initial", private: false, data: {} })
    };
    

    return (
        <Conteiner>
            <Nav
                onClick={onActionReload}
                color={"initial" == route.route ? "#276299" : "#747474"}
            >
                Inicio
            </Nav>

            <Nav
                onClick={() => setRoute({ route: "favorite", private: isAut, data: {} })}
                color={"favorite" == route.route ? "#276299" : "#747474"}
            >
                Favoritos
            </Nav>

            <Nav
                onClick={() => setRoute({ route: "upload", private: isAut, data: {} })}
                color={"upload" == route.route ? "#276299" : "#747474"}
            >
                Enviar Livro
            </Nav>

            {isAut ?
                <Nav
                    onClick={() => setRoute({ route: "account", private: false, data: {} })}
                    color={"account" == route.route ? "#276299" : "#747474"}
                >
                    Olá, {name}
                </Nav>
                :
                <Nav
                    onClick={() => setRoute({ route: "auth", private: false, data: {} })}
                    color={"auth" == route.route ? "#276299" : "#747474"}
                >
                    Login
                </Nav>
            }
        </Conteiner>
    )
}