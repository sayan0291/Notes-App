import { useEffect,useState } from "react";
import { Notes } from "@/Database/Supabase-client";
import useAuth from "../../hooks/useAuth.js";
import NotesContext from "./notes.context.js"

export default function NotesContxtProvider({children}) {
    const [documents,setDocuments] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const fetchDocuments = async() => {
            try {
                const notesDocuments = await Notes(user.user_id)
                setDocuments(notesDocuments);
            } catch (error) {
                console.log("Notes Error",error)
            }
        }
        fetchDocuments();
    },[])

    return (
        <NotesContext.Provider value={documents}>
            {children}
        </NotesContext.Provider>
    )

}