import { Conteiner, AreaBook } from "./styles";
import Search from "../../Components/Search";
import Book from "../../Components/Book";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function MyBook() {
    const { authenticated, getAllBooks } = useContext(AuthContext);

    return (
        <Conteiner>
            <Search />
            <AreaBook>
                {getAllBooks.map((v, i) =>
                    authenticated.user == v.sentByName &&
                    <Book
                        key={i}
                        data={v}
                    />
                )}
            </AreaBook>
        </Conteiner>
    )
}