/* eslint-disable react/prop-types */
/* eslint-disable no-extra-boolean-cast */
import { useContext, useState } from "react";
import { Conteiner, AreaForm, AreaInput, Label, Camp, Button } from "./styles";
import ErrorAlert from "../../../Components/ErrorAlert";

export default function SignUp({ setIsSignIn, SignUpAuth, AuthContext, ReactLoading }) {
    const { errorAuth, loading } = useContext(AuthContext);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const HandleSubmit = () => {
        SignUpAuth({ user, email, password, confirmPassword })
    };


    return (
        <Conteiner>
            <h1>Cadastro de Usuário</h1>

            <AreaForm>
                <ErrorAlert />
                <AreaInput>
                    <Label>Nome:</Label>
                    <Camp
                        type="text"
                        value={user}
                        placeholder="Digite o seu nome"
                        onChange={e => setUser(e.target.value)}
                        className={!!errorAuth.user ? "border border-danger" : "border border-primary"}
                    />

                    <Label>E-mail:</Label>
                    <Camp
                        type="text"
                        value={email}
                        placeholder="Digite sei e-mail"
                        onChange={e => setEmail(e.target.value)}
                        className={!!errorAuth.email ? "border border-danger" : "border border-primary"}
                    />

                    <Label>Senha:</Label>
                    <Camp
                        type="password"
                        value={password}
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                        className={!!errorAuth.password ? "border border-danger" : "border border-primary"}
                    />
                    <Label>Confirme  a senha:</Label>
                    <Camp
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirma a senha"
                        onChange={e => setConfirmPassword(e.target.value)}
                        className={errorAuth.confirmPassword ? "border border-danger" : "border border-primary"}
                    />
                </AreaInput>

                <Button bkcolor="#276299" onClick={HandleSubmit}>
                    {loading ? <ReactLoading type="spin" color="#fff" height={25} width={25} /> : "Registrar"}
                </Button>
                <Button bkcolor="#6895BF" onClick={() => setIsSignIn(true)}>Voltar ao Login</Button>
            </AreaForm>
        </Conteiner>
    )
}