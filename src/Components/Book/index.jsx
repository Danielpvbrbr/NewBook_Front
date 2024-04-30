/* eslint-disable react/prop-types */
import { Container, LogoImg, AreaInfo, AreaAction, Area } from "./styles"
import { BsFillHeartFill } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

export default function Book(props) {
    const { setRoute } = useContext(AuthContext);

    const onSendData = () => {
        setRoute({ route: "visualize", data: props.data })
    };

    return (
        <Container onClick={onSendData}>
            <LogoImg src={props.data.caseUrl} alt="NovoLivro" />
            <AreaInfo>
                <h1>{props.data.title}</h1>
                <AreaAction>
                    <Area pos="left">
                        <BsFillHeartFill color="#747474" />
                        <p>{props.data.like}</p>
                    </Area>
                    <Area pos="right">
                        <span>{props.data.pages}</span>
                        <p>Páginas</p>
                    </Area>
                </AreaAction>
            </AreaInfo>
        </Container>

    )
}