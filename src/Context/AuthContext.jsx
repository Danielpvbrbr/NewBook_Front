/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { API } from "../Services/Connection";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [route, setRoute] = useState({ route: "initial", private: false, data: {} });
    const [token, setToken] = useState(null);
    const [getAllBooks, setGetAllBooks] = useState([]);
    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [categoryAll, setCategoryAll] = useState([]);
    const [languageAll, setLanguageAll] = useState([]);
    const [authenticated, setAuthenticated] = useState(null);
    const [errorAuth, setErrorAuth] = useState([]);

    useEffect(() => {
        const Token = localStorage.getItem("token");
        const UserAuth = JSON.parse(localStorage.getItem("userAuth"));

        if (!!Token) {
            setToken(Token);
            setAuthenticated(UserAuth);
        }
    }, []);

   

    useEffect(() => {
        API.get("/book/getAll").then(res => {
            setGetAllBooks(res.data);
        }).catch(err => [
            console.log(err)
        ])
    }, []);

    const getCategory = (id) => {
        API.get(`/category/getById/${id}`).then(res => {
            setCategory(res.data.name);
        }).catch(err => {
            console.log(err)
        });

        return category;
    };

    useEffect(() => {
        API.get(`/category/getAll`).then(res => {
            setCategoryAll(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, [])


    const getLanguage = (id) => {
        API.get(`/language/getById/${id}`).then(res => {
            setLanguage(res.data.name);
        }).catch(err => {
            console.log(err)
        });

        return language;
    };

    useEffect(() => {
        API.get(`/language/getAll`).then(res => {
            setLanguageAll(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            token,
            route,
            setRoute,
            errorAuth,
            setErrorAuth,
            getAllBooks,
            getCategory,
            getLanguage,
            categoryAll,
            languageAll,
        }}>
            {children}
        </AuthContext.Provider>
    )
}