//import { useContext } from "react";
import styled from "styled-components"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";
import Authentication from "../../Context/Authentication";
import { AuthContext } from "../../Context/AuthContext";


export default function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);
    const { SignInAuth, SignUpAuth } = Authentication();

    return (
        <Conteiner>
            {isSignIn ?
                <SignIn
                    setIsSignIn={setIsSignIn}
                    SignInAuth={SignInAuth}
                    AuthContext={AuthContext}
                />
                :
                <SignUp
                    setIsSignIn={setIsSignIn}
                    SignUpAuth={SignUpAuth}
                    AuthContext={AuthContext}
                />
            }
        </Conteiner>
    )
}

export const Conteiner = styled.div`
    width: 65vw;
`;
