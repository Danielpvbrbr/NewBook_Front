import { useContext } from 'react';
import { AuthContext } from "../../Context/AuthContext";
import Book from "../../Components/Book";
import { Conteiner, SubInfo, AreaImg, Info, AreaDesc, LogoImg, BtnDonw, AreaBooks } from "./styles";
import { BsBookFill, BsCalendar, BsBookHalf, BsGlobe, BsFillPencilFill, BsFillHeartFill, BsTextParagraph } from "react-icons/bs";


export default function Visualize() {
    const { route, getAllBooks, getCategory, getLanguage } = useContext(AuthContext);

    return (
        <Conteiner>
            <AreaImg>
                <LogoImg src={route.data.caseUrl} alt="NovoLivro" />
                <Info>
                    <h3>{route.data.title}</h3>
                    <SubInfo>
                        <p><BsBookFill color="#276299" /> Paginas: <span>{route.data.pages}</span></p>
                        <p><BsBookHalf color="#276299" /> Editora: <span>{route.data.publishingCompany}</span></p>
                        <p><BsFillPencilFill color="#276299" /> Públicado por: <span>{route.data.sentByName}</span></p>
                        <p><BsGlobe color="#276299" /> Idioma: <span>{getLanguage(route.data.languageId)}</span></p>
                        <p><BsTextParagraph color="#276299" /> Categoria: <span>{getCategory(route.data.categoryId)}</span></p>
                        <p><BsFillHeartFill color="#276299" /> Gostou: <span>{route.data.like}</span></p>
                        <p><BsCalendar color="#276299" /> Ano: <span>{route.data.year}</span></p>
                    </SubInfo>

                    <BtnDonw onClick={() => alert(route.data.pdfUrl)}>Baixar</BtnDonw>
                </Info>
            </AreaImg>

            <AreaDesc>
                <h1>SINOPSE</h1>
                <p>{route.data.description}</p>
            </AreaDesc>
            <AreaBooks>
                <h3>LIVROS DO MESMO PUBLICANTE</h3>
                <section>
                    {getAllBooks.map((v, i) =>
                        <Book
                            key={i}
                            data={v}
                        />
                    )}
                </section>
            </AreaBooks>
        </Conteiner>
    );
}