import { useState, useContext } from "react";
import { Conteiner, AreaBook, Area, AreaCase, LogoImg, AreaForm, AreaAction, SeachPDf, Preview } from "./styles";
import { AuthContext } from "../../Context/AuthContext";
import ErrorAlert from "../../Components/ErrorAlert";

export default function Upload() {
    const { languageAll, categoryAll, uploadFile, setErrorAuth } = useContext(AuthContext);
    const [title, setTitle] = useState("A Arte de driblar destinos");
    const [pdf, setPdf] = useState("");
    const [description, setDescription] = useState("Perfeito! Os livros devem estar em formato pdf, no momento só vamos aceitar formato pdf, em breve aceitaremos outros formatos. Importante que o arquivo já esteja com o DRM removido, se você não sabe fazer isso, veja este tutorial no youtube. Pedimos também que não postem livros que já estão cadastrados no site, utilize a ferramenta de busca e nos ajude a poupar um pouco de trabalho");
    const [publishingCompany, setPublishingCompany] = useState("Celso Costa");
    const [category, setCategory] = useState(0);
    const [language, setLanguage] = useState(0);
    const [pages, setPages] = useState("120");
    const [year, setYear] = useState("2020");
    const [casePdf, setCasePdf] = useState({ caseUrl: "", file: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!!casePdf.file && !!pdf) {
            if ((category != 0) && (language != 0)) {
                uploadFile(
                    {
                        title: title,
                        description: description,
                        pages: pages,
                        files: [casePdf.file, pdf],
                        publishingCompany: publishingCompany,
                        year: year,
                        categoryId: category,
                        languageId: language
                    });
            } else {
                alert("Campo de seleceção Vázio!")
            }


        } else {
            setErrorAuth({
                err: ["*Há Campo não prenchido!"]
            });
        }
    };

    return (
        <Conteiner>
            <h2><span>Quer ajudar compartilhando um livro?</span> perfeito! Os livros devem estar em formato pdf, no momento só vamos aceitar formato pdf, em breve aceitaremos outros formatos. Importante que o arquivo já esteja com o DRM removido, se você não sabe fazer isso, veja este tutorial no youtube. Pedimos também que não postem livros que já estão cadastrados no site, utilize a ferramenta de busca e nos ajude a poupar um pouco de trabalho</h2>
            <Area onSubmit={handleSubmit}>
                <AreaBook>
                    <AreaCase>
                        <Preview htmlFor="casePdf">
                            {!!casePdf.caseUrl ?
                                <LogoImg src={casePdf.caseUrl} alt="Capa 156x230" />
                                :
                                <p>
                                    Selecionar Capa 156x230
                                </p>
                            }
                        </Preview>
                        <SeachPDf
                            bkcolor={!!pdf}
                            htmlFor="pdf"
                        >
                            {!!pdf ?
                                "Alterar PDF"
                                :
                                "Buscar PDF"}
                        </SeachPDf>
                        <ErrorAlert />
                    </AreaCase>

                    <AreaForm >
                        <input
                            type="text"
                            placeholder="Digite o Titulo"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Digite Editora"
                            value={publishingCompany}
                            onChange={e => setPublishingCompany(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Digite numero de páginas"
                            value={pages}
                            onChange={e => setPages(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Digite ano do livro"
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            required
                        />

                        <select defaultValue={0} required onChange={e => setCategory(e.target.value)}>
                            <option value={0} disabled>Selecione a categoria</option>
                            {categoryAll.map((v, i) =>
                                <option value={v.id} key={i}>{v.name}</option>
                            )}
                        </select>

                        <select defaultValue={0} required onChange={e => setLanguage(e.target.value)}>
                            <option value={0} disabled>Selecione o idioma</option>
                            {languageAll.map((v, i) =>
                                <option value={v.id} key={i}>{v.name}</option>
                            )}
                        </select>
                    </AreaForm>
                </AreaBook>
                <AreaAction>
                    <textarea
                        placeholder="Digite a Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    >
                    </textarea>
                    <input
                        type="file"
                        id="pdf"
                        accept=".pdf"
                        name="pdf"
                        onChange={e => setPdf(e.target.files[0])}
                    />
                    <input
                        type="file"
                        id="casePdf"
                        accept="image/png, image/jpeg, image/webp"
                        name="casePdf"
                        onChange={e => setCasePdf({ caseUrl: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] })}
                    />
                    <button type="submit">Enviar</button>
                </AreaAction>
            </Area>

        </Conteiner>
    )
}