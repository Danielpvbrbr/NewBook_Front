import { Container, SearchArea, InpSearch, SelectCategory } from "./styles"
import { BsSearch } from "react-icons/bs";

export default function Search() {
    return (
        <Container>
            <SearchArea>
                <BsSearch />
                <InpSearch type="search" placeholder="Qual livro está procurando?" />
            </SearchArea>

            <SelectCategory defaultValue="valor1">
                <option value="valor1">Categoria</option>
                <option value="valor2" >Categoria1</option>
                <option value="valor3">Categoria2</option>
            </SelectCategory>
        </Container>
    )
}