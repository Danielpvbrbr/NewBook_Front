import { useContext } from "react";
import { Conteiner, AreaBook } from "./styles";
import Search from "../../Components/Search";
import Book from "../../Components/Book";
import { AuthContext } from "../../Context/AuthContext";


export default function Home() {
    const { bookFilter } = useContext(AuthContext);

    return (
        <Conteiner>
            <Search />
            <AreaBook>
                {bookFilter.map((v, i) =>
                    <Book
                        key={i}
                        data={v}
                    />
                )}
            </AreaBook>
        </Conteiner>
    )
}