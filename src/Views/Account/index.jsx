//import { useContext } from "react";
import { Conteiner } from "./styles";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import { useState } from "react";
//import { AuthContext } from "../../Context/AuthContext";

export default function Account() {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Conteiner>
            {isSignIn ?
                <SignIn setIsSignIn={setIsSignIn} />
                :
                <SignUp setIsSignIn={setIsSignIn} />
            }
        </Conteiner>
    )
}