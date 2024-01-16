import { useState, useEffect } from "react";
import { DocumentComponent } from "../components/DocumentComponent";
import { Virtuoso } from "react-virtuoso";
import { getApiHost } from "@/pages";
import ImportModalComponent from "../components/ImportModalComponent";
import ConfigModal from "../components/ConfigModal";
import { FaPlus } from "react-icons/fa";
import CoolButton from "../components/CoolButton";

type Document = {
    doc_name: string;
    doc_type: string;
    doc_link: string;
    _additional: { id: string };
};

const apiHost = getApiHost()
const bgUrl = process.env.NODE_ENV === 'production'
    ? 'static/'
    : '/';


export default function DocumentOnly() {
    const [searchQuery, setSearchQuery] = useState("");
    const [uniqueDocTypes, setUniqueDocTypes] = useState<string[]>([]);
    const [selectedDocType, setSelectedDocType] = useState("All types");
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [documentTitle, setDocumentTitle] = useState("");
    const [documentText, setDocumentText] = useState("");
    const [documentType, setDocumentType] = useState<string>("Documentation");
    const [documentLink, setDocumentLink] = useState("#");
    const [documents, setDocuments] = useState<Document[]>([]);
    const [production, setProduction] = useState<boolean>(false);
    const [focusedDocument, setFocusedDocument] = useState<Document | null>(null);
    const [currentEmbedder, setCurrentEmbedder] = useState<string>("");

    const generatorStreamable = (streamable: boolean) => {
        console.log("Set Streamable")
    }

    useEffect(() => {
        const fetchProduction = async () => {
            try {
                const response = await fetch(apiHost + "/api/get_production", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const response_data = await response.json();

                if (response_data.production == true) {
                    console.log("In Production Mode")
                } else {
                    console.log("In Normal Mode")
                }

                // Update the document title and text
                setProduction(response_data.production);
            } catch (error) {
                console.error("Failed to fetch document:", error);
            }
        }

        fetchProduction();
    }, []);

    const fetchDocuments = async (query = "") => {
        try {
            const endpoint = query
                ? `${apiHost}/api/search_documents`
                : `${apiHost}/api/get_all_documents`;

            const body = { "query": query, "doc_type": selectedDocType == "All types" ? "" : selectedDocType };

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            // Assuming the data is an array of documents
            setDocuments(data.documents);
            setCurrentEmbedder(data.current_embedder)

            if (data.doc_types) {
                setUniqueDocTypes(data.doc_types);
            }

        } catch (error) {
            console.error(`Failed to fetch documents: ${error}`);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    useEffect(() => {
        const fetchDocument = async () => {
            if (focusedDocument && focusedDocument._additional.id) {
                try {
                    const response = await fetch(apiHost + "/api/get_document", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            document_id: focusedDocument._additional.id,
                        }),
                    });
                    const documentData = await response.json();

                    // Update the document title and text
                    setDocumentTitle(documentData.document.properties.doc_name);
                    setDocumentText(documentData.document.properties.text);
                    setDocumentType(documentData.document.properties.doc_type);
                    setDocumentLink(documentData.document.properties.doc_link);
                } catch (error) {
                    console.error("Failed to fetch document:", error);
                }
            }
        };

        fetchDocument();
    }, [focusedDocument]);

    const handleDeleteDocument = async () => {
        try {
            setIsDeleting(true)
            const response = await fetch(`${apiHost}/api/delete_document`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ document_id: focusedDocument?._additional.id }),
            });
            const data = await response.json();
            console.log(data);  // Log the response for debugging
            setShowDeleteModal(false);  // Hide the delete confirmation modal
            setIsDeleting(false);
            setFocusedDocument(null)
            setDocumentTitle("");
            setDocumentText("");
            fetchDocuments();  // Refresh the document list
        } catch (error) {
            console.error(`Failed to delete document: ${error}`);
        }
    };

    // Handle form submission
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const query = formData.get("searchInput");  // 'searchInput' is the name attribute of input field

        fetchDocuments(query as string);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10 text-gray-900">
            {showModal && <ImportModalComponent onClose={() => setShowModal(false)} apiHost={apiHost} />}
            <div className="flex flex-col w-full items-start">
                <div className="mb-2">
                    <div className="flex justify-between items-center w-full"> {/* <-- flexbox container */}
                        <div className="flex-none">
                            <img src={`${bgUrl}hti_logo.png`} alt="HTI Logo" className=" h-24" />
                        </div>
                        <div className=" w-4" />
                        <div className="flex justify-between items-center mx-auto p-4 ml-10">
                            <button
                                className="flex items-center animate-pop-in space-x-2 mr-8 bg-gray-200 text-black p-3  rounded-lg  hover:bg-green-400 border-2 border-black hover:border-white hover-container shadow-md"
                                onClick={() => setShowModal(true)}
                            >
                                <FaPlus />
                                <span>Add Documents</span>
                            </button>
                            <ConfigModal component="embedders" apiHost={apiHost} onGeneratorSelect={generatorStreamable} production={production}></ConfigModal>
                        </div>
                    </div>
                </div>
                <div className="flex w-full space-x-4 mt-28">
                    <div className="flex-1 bg-white border-2 overflow-y-auto border-black bg-opacity-20 rounded-lg shadow-md backdrop-filter min-h-[50vh] backdrop-blur-md p-4 w-1/3 animate-pop-in">
                        <div className="p-2">
                            <div className="flex justify-between items-center mb-4"> {/* Container for the title and button */}
                                <h2 className="text-lg font-bold mb-4">📚 Documents</h2>
                                {focusedDocument && (
                                    <button
                                        className="text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg truncate"
                                        onClick={() => setShowDeleteModal(true)}
                                    >
                                        ❌ Delete {focusedDocument.doc_name}
                                    </button>
                                )}
                            </div>

                            <p className="text-xs font-bold mb-4 text-gray-600">Search through all your {documents.length} imported documents embedded by {currentEmbedder}</p>
                            <div className="rounded-lg flex justify- between items-center">

                                <form
                                    className="rounded-b-xl p-2 w-full"
                                    onSubmit={handleSearch}
                                >
                                    <input
                                        type="text"
                                        name="searchInput"
                                        placeholder="Search for documents"
                                        className="w-full p-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </form>

                                <select
                                    value={selectedDocType}
                                    onChange={(e) => setSelectedDocType(e.target.value)}
                                    className="mr-2 bg-white text-gray-900 p-2 rounded-md"
                                >
                                    <option value="All types">All types</option>
                                    {uniqueDocTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <hr />
                        </div>
                        {documents.length > 0 && (
                            <Virtuoso
                                style={{ width: '100%', height: '66%' }}  // Set a width and height
                                totalCount={documents.length}  // Total count of items
                                itemContent={(index) => (
                                    <CoolButton
                                        key={documents[index].doc_name}
                                        main={documents[index].doc_name}
                                        clipboard={true}
                                        sub={documents[index].doc_type}
                                        subBgColor="yellow"
                                        mainBgColor="green"
                                        isActive={focusedDocument?.doc_name == documents[index].doc_name ? true : false}
                                        onClick={() => setFocusedDocument(documents[index])}
                                        title={documents[index].doc_name}
                                    />
                                )}
                            />
                        )}
                    </div>
                    <div className="w-2/3 space-y-4">
                        <DocumentComponent
                            title={documentTitle}
                            text={documentText}
                            extract={""}
                            docLink={documentLink}
                            type={documentType}
                        />
                    </div>
                </div>
            </div>
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in">
                        <h3 className="font-bold mb-4">⚠️ Warning</h3>
                        <p>Do you want to remove {focusedDocument?.doc_name}</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={() => setShowDeleteModal(false)} className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded">
                                No
                            </button>
                            <button onClick={handleDeleteDocument} className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded">
                                {isDeleting ? "Deleting..." : "Yes"} {/* Show spinner if loading, otherwise show "Yes" */}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}