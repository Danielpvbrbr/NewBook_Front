/* eslint-disable react/prop-types */
import { Container, LogoImg, AreaInfo, AreaAction, Area } from "./styles"
import { BsFillHeartFill } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

export default function Book(props) {
    const { setRoute } = useContext(AuthContext);

    return (
        <Container onClick={() => setRoute({ route: "visualize", data: props.data })}>
            <LogoImg src={props.data.case} alt="NovoLivro" />
            <AreaInfo>
                <h1>{props.data.title}</h1>
                <AreaAction>
                    <Area pos="left">
                        <BsFillHeartFill color={props.data.islike ? "#ff0000" : "#747474"} />
                        <p>{props.data.like}</p>
                    </Area>
                    <Area pos="right">
                        <span>{props.data.page}</span>
                        <p>Páginas</p>
                    </Area>
                </AreaAction>
            </AreaInfo>
        </Container>

    )
}