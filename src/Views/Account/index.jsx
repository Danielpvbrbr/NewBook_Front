//import { useContext } from "react";
//import { useContext } from "react";
import { Conteiner, AreaProfile } from "./styles";
import { BsBoxArrowRight, BsChevronRight } from "react-icons/bs";
//import { AuthContext } from "../../Context/AuthContext";
import Authentication from "../../Context/Authentication";

export default function Account() {
    // const { darkMode, } = useContext(AuthContext);
    const { LogoutAuth } = Authentication();

    return (
        <Conteiner>
            <AreaProfile>
                <h4 onClick={() => console.log("Meus Dados")}>Meus Dados</h4>
                <BsChevronRight cursor="pointer" onClick={LogoutAuth} />
            </AreaProfile>
            <AreaProfile>
                <h4 onClick={() => console.log("Meus Dados")}>Meus Livros</h4>
                <BsChevronRight cursor="pointer" onClick={LogoutAuth} />
            </AreaProfile>
            <AreaProfile >
                <h4 onClick={() => console.log("Meus Dados")}>Sair</h4>
                <BsBoxArrowRight cursor="pointer" onClick={LogoutAuth} />
            </AreaProfile>
        </Conteiner>
    )
}