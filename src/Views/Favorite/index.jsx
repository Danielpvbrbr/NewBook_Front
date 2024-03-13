import { Conteiner, AreaBook } from "./styles";
import Search from "../../Components/Search";
import Book from "../../Components/Book";

const  data = [
    {
        id: 1,
        title: "Duna",
        case: "https://imagens.elivros.love/Frank-Herbert/Baixar-Livro-Duna-Duna-Vol-1-Frank-Herbert-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg",
        pdfUrl: "",
        like: 42,
        description: "O que aconteceria se você tivesse apenas um ano para salvar tudo o que ama? Anos após o desfecho do filme Valente, a princesa Merida de DunBroch precisa de uma mudança. Por mais que ame sua família — o brincalhão rei Fergus, a respeitável rainha Elinor e os travessos trigêmeos — e seu reino pacífico, ela está farta da letargia. Todos os dias são sempre iguais. Merida anseia por aventuras, propósitos, desafios e, quem sabe um dia, até amor. Mas a impetuosa princesa jamais imaginaria que sua inquietação traria à tona a presença de Feradach, um ser misterioso e sobrenatural encarregado de extirpar tudo o que há de podre e estagnado. O deus aparece em DunBroch na véspera de Natal, determinado a demolir o reino — e todos que lá vivem. Apenas a intervenção de Cailleach, uma antiga deusa da criação, dá a Merida uma pitada de esperança: ela poderá convencer a família a mudar dentro de um ano — ou terá de arcar com consequências perpétuas. Sob o olhar atento dos deuses, Merida lidera uma série de jornadas épicas a reinos vizinhos e distantes em uma tentativa de incitar a mudança no âmbito familiar. No entanto, em sua ânsia de salvar todos aqueles que ama da ruína, Merida talvez tenha deixado de lado o membro mais estagnado do clã DunBroch — ela mesma",
        pages: 89,
        publishingCompany: "Gambiarra",
        sentByName: "Sando Calvacante de souza",
        category: "Ação",
        language: "Portugues",
        year: 2003,
        islike: false
    },
    {
        id: 2,
        title: "O Enigma dos Dados",
        case: "https://imagens.elivros.love/Marcos-Mota/baixar-livro-enigma-dos-dados-objetos-de-poder-vol-1-marcos-mota-em-epub-pdf-mobi-ou-ler-online_large.webp",
        pdfUrl: "",
        like: 76,
        description: "O que aconteceria se você tivesse apenas um ano para salvar tudo o que ama? Anos após o desfecho do filme Valente, a princesa Merida de DunBroch precisa de uma mudança. Por mais que ame sua família — o brincalhão rei Fergus, a respeitável rainha Elinor e os travessos trigêmeos — e seu reino pacífico, ela está farta da letargia. Todos os dias são sempre iguais. Merida anseia por aventuras, propósitos, desafios e, quem sabe um dia, até amor. Mas a impetuosa princesa jamais imaginaria que sua inquietação traria à tona a presença de Feradach, um ser misterioso e sobrenatural encarregado de extirpar tudo o que há de podre e estagnado. O deus aparece em DunBroch na véspera de Natal, determinado a demolir o reino — e todos que lá vivem. Apenas a intervenção de Cailleach, uma antiga deusa da criação, dá a Merida uma pitada de esperança: ela poderá convencer a família a mudar dentro de um ano — ou terá de arcar com consequências perpétuas. Sob o olhar atento dos deuses, Merida lidera uma série de jornadas épicas a reinos vizinhos e distantes em uma tentativa de incitar a mudança no âmbito familiar. No entanto, em sua ânsia de salvar todos aqueles que ama da ruína, Merida talvez tenha deixado de lado o membro mais estagnado do clã DunBroch — ela mesma",
        pages: 899,
        publishingCompany: "Sonarata",
        sentByName: "Donato Damaceno",
        category: "Terror",
        language: "Ingles",
        year: 2000,
        islike: true
    },
    {
        id: 3,
        title: "O Avesso da Pele",
        case: "https://imagens.elivros.love/Frank-Herbert/Baixar-Livro-Duna-Duna-Vol-1-Frank-Herbert-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg",
        pdfUrl: "",
        like: 72,
        description: "O que aconteceria se você tivesse apenas um ano para salvar tudo o que ama? Anos após o desfecho do filme Valente, a princesa Merida de DunBroch precisa de uma mudança. Por mais que ame sua família — o brincalhão rei Fergus, a respeitável rainha Elinor e os travessos trigêmeos — e seu reino pacífico, ela está farta da letargia. Todos os dias são sempre iguais. Merida anseia por aventuras, propósitos, desafios e, quem sabe um dia, até amor. Mas a impetuosa princesa jamais imaginaria que sua inquietação traria à tona a presença de Feradach, um ser misterioso e sobrenatural encarregado de extirpar tudo o que há de podre e estagnado. O deus aparece em DunBroch na véspera de Natal, determinado a demolir o reino — e todos que lá vivem. Apenas a intervenção de Cailleach, uma antiga deusa da criação, dá a Merida uma pitada de esperança: ela poderá convencer a família a mudar dentro de um ano — ou terá de arcar com consequências perpétuas. Sob o olhar atento dos deuses, Merida lidera uma série de jornadas épicas a reinos vizinhos e distantes em uma tentativa de incitar a mudança no âmbito familiar. No entanto, em sua ânsia de salvar todos aqueles que ama da ruína, Merida talvez tenha deixado de lado o membro mais estagnado do clã DunBroch — ela mesma",
        pages: 54,
        publishingCompany: "Gimbilam",
        sentByName: "Mirtes Nascimento",
        category: "Politica",
        language: "Portugues",
        year: 2001,
        islike: true
    },
    {
        id: 4,
        title: "Vamos Pensar mais um Pouco",
        case: "https://imagens.elivros.love/Mauricio-de-Sousa/baixar-livro-vamos-pensar-mais-um-pouco-mauricio-de-sousa-em-epub-pdf-mobi-ou-ler-online_large.webp",
        pdfUrl: "",
        like: 72,
        description: "O que aconteceria se você tivesse apenas um ano para salvar tudo o que ama? Anos após o desfecho do filme Valente, a princesa Merida de DunBroch precisa de uma mudança. Por mais que ame sua família — o brincalhão rei Fergus, a respeitável rainha Elinor e os travessos trigêmeos — e seu reino pacífico, ela está farta da letargia. Todos os dias são sempre iguais. Merida anseia por aventuras, propósitos, desafios e, quem sabe um dia, até amor. Mas a impetuosa princesa jamais imaginaria que sua inquietação traria à tona a presença de Feradach, um ser misterioso e sobrenatural encarregado de extirpar tudo o que há de podre e estagnado. O deus aparece em DunBroch na véspera de Natal, determinado a demolir o reino — e todos que lá vivem. Apenas a intervenção de Cailleach, uma antiga deusa da criação, dá a Merida uma pitada de esperança: ela poderá convencer a família a mudar dentro de um ano — ou terá de arcar com consequências perpétuas. Sob o olhar atento dos deuses, Merida lidera uma série de jornadas épicas a reinos vizinhos e distantes em uma tentativa de incitar a mudança no âmbito familiar. No entanto, em sua ânsia de salvar todos aqueles que ama da ruína, Merida talvez tenha deixado de lado o membro mais estagnado do clã DunBroch — ela mesma",
        pages: 66,
        publishingCompany: "Toarama",
        sentByName: "Pamelo Santiago da conceição",
        category: "Terror",
        language: "Portugues",
        year: 2021,
        islike: false
    }

]

export default function Favorite() {

    return (
        <Conteiner>
            <Search />
            <AreaBook>
            {data.map((v, i) =>
                    <Book
                        key={i}
                        data={v}
                    />
                )}
            </AreaBook>
        </Conteiner>
    )
}