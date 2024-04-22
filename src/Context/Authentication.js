import { useContext } from "react";
import { API } from "../Services/Connection";
import { AuthContext } from "./AuthContext";

export default function Authentication() {
    const { setErrorAuth, setLoading } = useContext(AuthContext);

    const SignInAuth = async ({ email, password }) => {
        setLoading(true);
        await API.post("/auth/login", {
            email: email,
            password: password
        }).then(response => {
            setLoading(false);

            if (response.data.status) {
                localStorage.setItem("token", response.data.data);
                localStorage.setItem("userAuth", JSON.stringify(response.data.values));
                location.reload();
                setLoading(false);

            } else {
                //alert(response.data.message)
                let err = {
                    err: [response.data.message],
                    email: [],
                    password: [],
                }
                setErrorAuth(err);
                setLoading(false);
            }
        }).catch(error => {
            setLoading(false);
            let err = {
                email: error.response.data.errors.Email,
                password: error.response.data.errors.Password,
            }
            //console.error(error.response);
            setErrorAuth(err);
            console.error(error);
      
        });
    };

    const SignUpAuth = async ({ user, email, password, confirmPassword }) => {
        setLoading(true);
        await API.post("/auth/register", {
            user: user,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }).then(response => {
            setLoading(false);
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
            setLoading(false);
        });
    };

    const LogoutAuth = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userAuth");
        location.reload();
    };

    return {
        SignInAuth,
        SignUpAuth,
        LogoutAuth
    }
}
