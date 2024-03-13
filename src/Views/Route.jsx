import { useContext } from 'react'
import { AuthContext } from "../Context/AuthContext";
import Home from "./Home";
import Favorite from "./Favorite";
import Upload from './Upload';
import Account from "./Account";
import Visualize from "./Visualize";

export default function Route() {
    const { route } = useContext(AuthContext);

    const RouterActive = () => {
        switch (route.route) {
            case "initial":
                return <Home />
            case "favorite":
                return <Favorite />
            case "upload":
                return <Upload />
            case "account":
                return <Account />
            case "visualize":
                return <Visualize />
        }
    }

    return (
        <>
            {RouterActive()}
        </>
    )
}

