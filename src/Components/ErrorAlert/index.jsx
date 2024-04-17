import { Container, AreaError } from "./styles";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

export default function ErrorAlert() {
    const { errorAuth } = useContext(AuthContext);
    const error = [];

    for (var i in errorAuth) {
        if (errorAuth[i] != undefined) {
            if (errorAuth[i].length > 1) {
                for (let id in errorAuth[i]) {
                    error.push({ reference: i, message: errorAuth[i][id] })
                }
            }
            const err = ({ reference: i, message: errorAuth[i][0] });
            error.push(err)
        }
    }

    return (
        <Container className="bg-danger">
            {error.map((v, i) =>
                v.message != null &&
                <AreaError key={i} >
                    <p className="text-white">{v.message}</p>
                </AreaError>
            )}
        </Container>

    )
}
