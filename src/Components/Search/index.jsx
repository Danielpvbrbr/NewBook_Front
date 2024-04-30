/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Container, SearchArea, InpSearch, SelectCategory } from "./styles"
import { BsSearch } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthContext";

export default function Search() {
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const { categoryAll, getAllBooks, setbookFilter } = useContext(AuthContext);

    const Search = (val) => {
        let arr = [];
        setSearch(val);
        for (let i in getAllBooks) {
            if (getAllBooks[i].title.toLowerCase().indexOf(val.toLowerCase()) > -1) {
                arr.push(getAllBooks[i]);
            }
        }

        if (arr.length) {
            setbookFilter(arr)
        }
    };

    const Filter = (val) => {
        setFilterCategory(val);
        if (!!val) {
            const arr = getAllBooks.filter(el => el.categoryId == val);
            setbookFilter(arr)
        }else{
            setbookFilter(getAllBooks)
        }

    };

    useEffect(() => {
        if (search.length < 1) {
            setbookFilter(getAllBooks);
        }

    }, [getAllBooks, search.length, setbookFilter]);

    return (
        <Container>
            <SearchArea>
                <BsSearch />
                <InpSearch
                    value={search}
                    onChange={e => Search(e.target.value)}
                    type="search"
                    placeholder="Qual livro está procurando?"
                />
            </SearchArea>

            <SelectCategory value={filterCategory} onChange={e => Filter(e.target.value)}>
                <option value="">Todos</option>
                {categoryAll.map((v, i) =>
                    <option key={i} value={v.id}>{v.name}</option>
                )}
            </SelectCategory>
        </Container>
    )
}