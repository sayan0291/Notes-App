import { useCallback, useEffect, useState } from "react";
import { Notes } from "../../Database/Supabase-client.js";
import useAuth from "../../hooks/useAuth.js";
import NotesContext from "./notes.context.js"

export default function NotesContextProvider({children}) {
    const [documents,setDocuments] = useState([]);
    const [loading,setLoading] = useState(true);

    const { user } = useAuth();

    const fetchDocuments = async () => {
            if(!user) return;
            try {
                const notesDocuments = await Notes(user.user_id)
                setDocuments(notesDocuments);

            } catch (error) {
                console.log("notes data",error);
            } finally {
                setLoading(false);
            }
    }

    useEffect(() => {

        fetchDocuments();
    },[])

    return (
        <NotesContext.Provider value={{ documents, loading }}>
            {children}
        </NotesContext.Provider>
    )
}
