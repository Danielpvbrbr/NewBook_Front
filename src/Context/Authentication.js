import { useContext } from "react";
import { API } from "../Services/Connection";
import { AuthContext } from "./AuthContext";

export default function Authentication() {
    const { setErrorAuth } = useContext(AuthContext);

    const SignInAuth = ({ email, password }) => {
        API.post("/auth/login", {
            email: email,
            password: password
        }).then(response => {
            if (response.data.status) {
                localStorage.setItem("token", response.data.data);
                localStorage.setItem("userAuth", JSON.stringify(response.data.values));
                location.reload();
            } else {
                //alert(response.data.message)
                let err = {
                    err: [response.data.message],
                    email: [],
                    password: [],
                }
                setErrorAuth(err);
            }
        }).catch(error => {
            let err = {
                email: error.response.data.errors.Email,
                password: error.response.data.errors.Password,
            }
            //console.error(error.response);
            setErrorAuth(err);
            console.error(error);
        });
    };

    const SignUpAuth = ({ user, email, password, confirmPassword }) => {
        API.post("/auth/register", {
            user: user,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then(response => {
            if (response.data.status) {
                localStorage.setItem("token", response.data.data);
                localStorage.setItem("userAuth", JSON.stringify(response.data.values));
                location.reload();
            } else {
                alert(response.data.message)
            }
            //console.log(response)
        }).catch(error => {
            let err = {
                user: error.response.data.errors.User,
                email: error.response.data.errors.Email,
                password: error.response.data.errors.Password,
                confirmPassword: error.response.data.errors.ConfirmPassword
            }
            //console.error(error.response);
            setErrorAuth(err);
        });
    };

    const LogoutAuth = () => {
        localStorage.removeItem("token");
        localStorage.setItem("userAuth");

        location.reload();
    };

    return {
        SignInAuth,
        SignUpAuth,
        LogoutAuth
    }
}
