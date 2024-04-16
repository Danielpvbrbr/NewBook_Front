/* eslint-disable react/prop-types */
//import { useContext } from "react";
import { useState } from "react";
import { Conteiner, AreaForm, AreaInput, Label, Camp, Button } from "./styles";

import Authentication from "../../../Context/Authentication";
export default function SignIn({ setIsSignIn }) {
    const [email, setEmail] = useState("daniel@example.com");
    const [password, SetPassword] = useState("1801");

    const HandleSubmit = () => {
        Authentication({ email, password })
    };

    return (
        <Conteiner>
            <h1>Acesso de Usuário</h1>
            <AreaForm>
                <AreaInput>
                    <Label>E-mail:</Label>
                    <Camp
                        type="text"
                        placeholder="Digite sei e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Label>Senha:</Label>
                    <Camp
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => SetPassword(e.target.value)}
                    />
                </AreaInput>

                <Button bkcolor="#276299" onClick={HandleSubmit}>Acessar</Button>
                <Button bkcolor="#6895BF" onClick={() => setIsSignIn(false)}>Voltar ao Registar</Button>
            </AreaForm>
        </Conteiner>
    )
}