import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
//   import pdf from "../../assets/compressed.tracemonkey-pldi-09.pdf";

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function MyApp() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
 
    const url = "https://www.sbp.com.br/fileadmin/user_upload/Revista_Da_Turma_Da_Monica_Sobre_Drogas.pdf"
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    

    return (
        <>
            <div className="main">
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                        pageNumber={pageNumber}
                    />
                </Document>
                <div>
                    <div className="pagec">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>
                    <div className="buttonc">
                        <button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="Pre"

                        >
                            VISUALIZAR
                        </button>
                        <button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >
                            Proximo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}