import { Conteiner, AreaBook } from "./styles";
import Search from "../../Components/Search";
import Book from "../../Components/Book";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Favorite() {
    const { favoriteAll, bookFilter } = useContext(AuthContext);

    const filterBook = () => {
        let arr = [];
        for (let i in favoriteAll) {
            arr.push(favoriteAll[i].bookId)
        }
        return arr
    }
    
    return (
        <Conteiner>
              <Search/>
            <AreaBook>
                {bookFilter.map((v, i) =>
                   filterBook().includes(v.id) &&
                    <Book
                        key={i}
                        data={v}
                    />
                )}
            </AreaBook>
        </Conteiner>
    )
}