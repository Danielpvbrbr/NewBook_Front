import { useContext } from 'react'
import { AuthContext } from "../Context/AuthContext";
import Home from "./Home";
import Favorite from "./Favorite";
import Upload from './Upload';
import Auth from "./Auth/Auth";
import Account from "./Account";
import Visualize from "./Visualize";

export default function Route() {
    const { route} = useContext(AuthContext);

    const RouterActive = () => {
        switch (route.route) {
            case "initial":
                return <Home />
            case "favorite":
                return <Favorite />
            case "upload":
                if (route.private) {
                    return <Upload />
                }
                return <Auth />
            case "account":
                return <Account />
            case "visualize":
                return <Visualize />
            case "auth":
                return <Auth />
        }
    }

    return (
        <>
            {RouterActive()}
        </>
    )
}

