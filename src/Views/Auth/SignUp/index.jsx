/* eslint-disable react/prop-types */
//import { useContext } from "react";
import { useState } from "react";
import { Conteiner, AreaForm, AreaInput, Label, Camp, Button } from "./styles";
//import { AuthContext } from "../../Context/AuthContext";

export default function SignUp({ setIsSignIn }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const HandleSubmit = () => {
        
    };

    return (
        <Conteiner>
            <h1>Cadastro de Usuário</h1>
            <AreaForm>
                <AreaInput>
                    <Label>Nome:</Label>
                    <Camp
                        type="text"
                        value={name}
                        placeholder="Digite o seu nome"
                        onChange={e => setName(e.target.value)}
                    />

                    <Label>E-mail:</Label>
                    <Camp
                        type="text"
                        value={email}
                        placeholder="Digite sei e-mail"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Label>Senha:</Label>
                    <Camp
                        type="password"
                        value={password}
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Label>Confirme  a senha:</Label>
                    <Camp
                        type="password"
                        value={confirmPass}
                        placeholder="Confirma a senha"
                        onChange={e => setConfirmPass(e.target.value)}
                    />
                </AreaInput>

                <Button bkcolor="#276299" onClick={HandleSubmit}>Registrar</Button>
                <Button bkcolor="#6895BF" onClick={() => setIsSignIn(true)}>Voltar ao Login</Button>
            </AreaForm>
        </Conteiner>
    )
}