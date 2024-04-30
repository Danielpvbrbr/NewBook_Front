import { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthContext";
import Book from "../../Components/Book";
import { Conteiner, SubInfo, AreaImg, Info, ButtonAction, AreaDesc, LogoImg, BtnDonw, AreaBooks } from "./styles";
import { BsBookFill, BsCalendar, BsBookHalf, BsGlobe, BsFillPencilFill, BsFillHeartFill, BsTextParagraph } from "react-icons/bs";


export default function Visualize() {
    const {
        authenticated,
        route,
        setRoute,
        getAllBooks,
        getCategory,
        getLanguage,
        sendFavorite,
        removeFavorite,
        favoriteAll,

    } = useContext(AuthContext);
    const favorite = favoriteAll.filter(el => el.bookId == route.data.id);
    const [like, setLike] = useState(false || !!favorite.length);


    const OnLike = () => {
        if (!!authenticated) {
            setLike(!like);
            if (like) {
                removeFavorite(favorite[0].id);
            } else {
                sendFavorite({
                    title: route.data.title,
                    bookId: route.data.id,
                    userEmail: null
                });
            }
        } else {
            setRoute({ route: "auth", private: false, data: {} })
        }
    };

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

                    <ButtonAction>
                        <BtnDonw onClick={() => alert(route.data.pdfUrl)}>Baixar</BtnDonw>
                        <BsFillHeartFill cursor="pointer" onClick={OnLike} color={like ? "#ff0000" : "#747474"} />
                    </ButtonAction>
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
                        (route.data.sentByName == v.sentByName) &&
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