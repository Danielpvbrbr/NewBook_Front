import { useState, useContext } from "react";
import { Conteiner, AreaBook, Area, AreaCase, LogoImg, AreaForm, AreaAction } from "./styles";
import { AuthContext } from "../../Context/AuthContext";

export default function Upload() {
    const { languageAll, categoryAll } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [pdfUrl, setPdfUrl] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState(0);
    const [publishingCompany, setPublishingCompany] = useState("");
    const [byName, setByName] = useState("");
    const [category, setCategory] = useState(0);
    const [language, setLanguage] = useState(0);
    const [year, setYear] = useState(0);
    const [caseUrl, setCaseUrl] = useState(0);



    return (
        <Conteiner>
            <h2><span>Quer ajudar compartilhando um livro?</span> perfeito! Os livros devem estar em formato pdf, no momento só vamos aceitar formato pdf, em breve aceitaremos outros formatos. Importante que o arquivo já esteja com o DRM removido, se você não sabe fazer isso, veja este tutorial no youtube. Pedimos também que não postem livros que já estão cadastrados no site, utilize a ferramenta de busca e nos ajude a poupar um pouco de trabalho</h2>

            <Area>
                <AreaBook>
                    <AreaCase>
                        <LogoImg src={"https://imagens.elivros.love/S-T-Joshi/baixar-livro-vida-de-lovecraft-joshi-em-epub-pdf-mobi-ou-ler-online_large.webp"} alt="NovoLivro" />
                    </AreaCase>

                    <AreaForm>
                        <input
                            type="text"
                            placeholder="Digite o Titulo"
                        />

                        <input
                            type="text"
                            placeholder="Digite Editora"
                        />

                        <input
                            type="number"
                            placeholder="Digite numero de páginas"
                        />

                        <select>
                            {categoryAll.map((v, i) =>
                                <option key={i}>{v.name}</option>
                            )}
                        </select>

                        <select>
                            {languageAll.map((v, i) =>
                                <option key={i}>{v.name}</option>
                            )}
                        </select>
                    </AreaForm>

                </AreaBook>
                <AreaAction>
                    <textarea placeholder="Digite a Descrição">

                    </textarea>
                    <button onClick={() => console.log("")}>Enviar</button>
                </AreaAction>
            </Area>

        </Conteiner>
    )
}