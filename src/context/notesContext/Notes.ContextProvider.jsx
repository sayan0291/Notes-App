import { useCallback, useEffect, useState } from "react";
import { Notes } from "@/Database/Supabase-client";
import useAuth from "../../hooks/useAuth.js";
import NotesContext from "./notes.context.js"

export default function NotesContxtProvider({children}) {
    const [documents,setDocuments] = useState([]);
    const [loading,setLoading] = useState(true);

    const { user } = useAuth();

    const fetchDocuments = useCallback(async() => {
        if (!user?.id) return;

        try {
            setLoading(true);
            const notesDocuments = await Notes(user.user_id);
            setDocuments(notesDocuments);
        } catch (error) {
            console.log("Notes Error",error);
        } finally {
            setLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        fetchDocuments();
    },[fetchDocuments])

    return (
        <NotesContext.Provider value={{ documents, loading, refreshDocuments: fetchDocuments }}>
            {children}
        </NotesContext.Provider>
    )
}
