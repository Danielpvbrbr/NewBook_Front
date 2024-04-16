/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { API } from "../Services/Connection";
export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [route, setRoute] = useState({ route: "initial", data: {} });
    const [getAllBooks, setGetAllBooks] = useState([]);
    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [categoryAll, setCategoryAll] = useState([]);
    const [languageAll, setLanguageAll] = useState([]);


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
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });

        return category;
    };

    useEffect(() => {
        API.get(`/category/getAll`).then(res => {
            console.log(res.data)
            setCategoryAll(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, [])


    const getLanguage = (id) => {
        API.get(`/language/getById/${id}`).then(res => {
            setLanguage(res.data.name);
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });

        return language;
    };

    useEffect(() => {
        API.get(`/language/getAll`).then(res => {
            setLanguageAll(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <AuthContext.Provider value={{
            route: route,
            setRoute: setRoute,
            getAllBooks: getAllBooks,
            getCategory: getCategory,
            getLanguage: getLanguage,
            categoryAll: categoryAll,
            languageAll: languageAll
        }}>
            {children}
        </AuthContext.Provider>
    )
}