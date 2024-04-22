import { useContext } from "react";
import styled from "styled-components"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";
import Authentication from "../../Context/Authentication";
import { AuthContext } from "../../Context/AuthContext";
import ReactLoading from 'react-loading';

export default function Auth() {
    const { setErrorAuth } = useContext(AuthContext);
    const [isSignIn, setIsSignIn] = useState(true);
    const { SignInAuth, SignUpAuth } = Authentication();

    const clearError = () => {
        setErrorAuth([]);
        setIsSignIn(!isSignIn);
    };

    return (
        <Conteiner>
            {isSignIn ?
                <SignIn
                    setIsSignIn={clearError}
                    SignInAuth={SignInAuth}
                    AuthContext={AuthContext}
                    ReactLoading={ReactLoading}
                />
                :
                <SignUp
                    setIsSignIn={clearError}
                    SignUpAuth={SignUpAuth}
                    AuthContext={AuthContext}
                    ReactLoading={ReactLoading}
                />
            }
        </Conteiner>
    )
}

export const Conteiner = styled.div`
    width: 65vw;
`;
