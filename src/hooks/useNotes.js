import { useContext } from "react";
import NotesContextProvider from "../context/notesContext/Notes.ContextProvider.jsx"

export default function useNotes() {
    const context = useContext(NotesContextProvider)
    if(!context) {
        throw new Error("useContext must be used inside NotesContextProvider")
    }
    return context;
}