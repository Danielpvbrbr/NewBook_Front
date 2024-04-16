import { API } from "../Services/Connection";

const Authentication = ({ email, password }) => {
    API.post("/auth/login", {
        email: email,
        password: password
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    });
    console.log({
        email: email,
        password: password
    })
};

export default Authentication;