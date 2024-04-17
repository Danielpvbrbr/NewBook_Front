/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
//import { useContext } from "react";
import { useState, useContext } from "react";
import { Conteiner, AreaForm, AreaInput, Label, Camp, Button } from "./styles";
import ErrorAlert from "../../../Components/ErrorAlert";

export default function SignIn({ setIsSignIn, SignInAuth, AuthContext }) {
    const { errorAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("daniel@example.com");
    const [password, SetPassword] = useState("1801");

    const HandleSubmit = () => {
        SignInAuth({ email, password })
    };

    return (
        <Conteiner>
            <h1>Acesso de Usuário</h1>

            <AreaForm>
            <ErrorAlert />
                <AreaInput>
                    <Label>E-mail:</Label>
                    <Camp
                        type="text"
                        placeholder="Digite sei e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={!!errorAuth.email ? "border border-danger" : "border border-primary"}
                    />

                    <Label>Senha:</Label>
                    <Camp
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => SetPassword(e.target.value)}
                        className={!!errorAuth.password ? "border border-danger" : "border border-primary"}
                    />
                </AreaInput>

                <Button bkcolor="#276299" onClick={HandleSubmit}>Acessar</Button>
                <Button bkcolor="#6895BF" onClick={() => setIsSignIn(false)}>Voltar ao Registar</Button>
            </AreaForm>
        </Conteiner>
    )
}