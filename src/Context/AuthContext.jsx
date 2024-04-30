/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { API } from "../Services/Connection";
import Authentication from "./Authentication";
export const AuthContext = createContext({})

import { storage } from '../Services/FirebaseConnection';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const AuthProvider = ({ children }) => {
    const [route, setRoute] = useState({ route: "initial", private: false, data: {} });
    const [getAllBooks, setGetAllBooks] = useState([]);
    const [category, setCategory] = useState("");
    const [language, setLanguage] = useState("");
    const [categoryAll, setCategoryAll] = useState([]);
    const [languageAll, setLanguageAll] = useState([]);
    const [favoriteAll, setFavoriteAll] = useState([]);
    const [authenticated, setAuthenticated] = useState(null);
    const [errorAuth, setErrorAuth] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bookFilter, setbookFilter] = useState([]);
    const { LogoutAuth } = Authentication();

    useEffect(() => {
        const UserAuth = JSON.parse(localStorage.getItem("userAuth"));
        if (!!UserAuth) {
            setAuthenticated(UserAuth);
        }
    }, []);

    useEffect(() => {
        API.get("/auth/authorization").catch(err => {
            if (err.response.status == 401 && !!authenticated) {
                LogoutAuth();
            }
        })
    }, [LogoutAuth, authenticated]);

    useEffect(() => {
        API.get("/book/getAll").then(res => {
            setGetAllBooks(res.data);
        }).catch(err => [
            //console.log(err)
        ])
    }, []);

    const getCategory = (id) => {
        API.get(`/category/getById/${id}`).then(res => {
            setCategory(res.data.name);
        }).catch(err => {
            //console.log(err)
        });

        return category;
    };

    useEffect(() => {
        API.get(`/category/getAll`).then(res => {
            setCategoryAll(res.data);
        }).catch(err => {
            // console.log(err)
        });
    }, [])


    const getLanguage = (id) => {
        API.get(`/language/getById/${id}`).then(res => {
            setLanguage(res.data.name);
        }).catch(err => {
            //console.log(err)
        });

        return language;
    };

    useEffect(() => {
        API.get(`/language/getAll`).then(res => {
            setLanguageAll(res.data);
        }).catch(err => {
            //console.log(err)
        });
    }, []);

    useEffect(() => {
        API.get(`/favorite/getAll`).then(res => {
            const favorite = res.data.filter(el => el.userEmail == authenticated.email);
            setFavoriteAll(favorite);
        }).catch(err => {
            //console.log(err)
        });
    }, [authenticated]);

    const removeFavorite = (id) => {
        API.delete(`/favorite/remove/${id}`).then(res => {
            // console.log(res.data)
        })
    }

    const sendFavorite = (data) => {
        API.post("/favorite/add", {
            title: data.title,
            bookId: data.bookId,
            userEmail: authenticated.email
        }).then(res => {
            //console.log(res.data)
        })
    }

    const uploadFile = (data) => {
        let dataFiles = data.files
        var rum = [];
        setLoading(true);
        for (let i in dataFiles) {
            const storageRef = ref(storage, `${authenticated.email}/${data.title}${Number(i)}`);
            const uploadTask = uploadBytesResumable(storageRef, dataFiles[i]);
            uploadTask.on(
                "state_changed", (snapshot) => {
                    // const progress = Math.round(
                    //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    // );
                    //console.log(progress == 100 && "Ok");
                }, (error) => {
                    //console.log(error);
                }, async () => {
                    await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        rum.push({
                            type: Number(i),
                            url: downloadURL
                        });

                        if (rum.length === dataFiles.length) {
                            const caseUrl = rum.filter(element => element.type == 0)[0].url;
                            const pdfUrl = rum.filter(element => element.type == 1)[0].url;

                            API.post("book/add", {
                                title: data.title,
                                description: data.description,
                                caseUrl: caseUrl,
                                pdfUrl: pdfUrl,
                                pages: Number(data.pages),
                                publishingCompany: data.publishingCompany,
                                sentByName: authenticated.user,
                                year: Number(data.year),
                                categoryId: Number(data.categoryId),
                                languageId: Number(data.languageId)
                            }).then(() => {
                                setLoading(false);
                                location.reload();
                            }).catch(err => {
                                console.log(err);
                                alert("Erro excluindo dados do firebase")
                            })
                        }
                    });
                }
            );
        }
    }

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            route,
            setRoute,
            errorAuth,
            setErrorAuth,
            getAllBooks,
            getCategory,
            getLanguage,
            categoryAll,
            languageAll,
            favoriteAll,
            loading,
            setLoading,
            uploadFile,
            sendFavorite,
            removeFavorite,
            setGetAllBooks,
            bookFilter,
            setbookFilter
        }}>
            {children}
        </AuthContext.Provider>
    )
}