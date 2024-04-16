import { useContext } from "react";
import { Conteiner, AreaBook } from "./styles";
import Search from "../../Components/Search";
import Book from "../../Components/Book";
import { AuthContext } from "../../Context/AuthContext";


export default function Home() {
    const { getAllBooks } = useContext(AuthContext);
console.log(getAllBooks)
    return (
        <Conteiner>
            <Search />
            <AreaBook>
                {getAllBooks.map((v, i) =>
                    <Book
                        key={i}
                        data={v}
                    />
                )}
            </AreaBook>
        </Conteiner>
    )
}