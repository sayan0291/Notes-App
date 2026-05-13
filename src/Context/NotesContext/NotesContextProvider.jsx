import React from "react";
import NotesContext from "./NotesContext";

export const NotesContextProvider = ({children}) => {
    const [notes,setNotes] = React.useState([]);
    const [notedetails,setNotedetails] = React.useState([]);

    return(
        <NotesContext.Provider value={{notes,setNotes,notedetails,setNotedetails}}>
            {children}
        </NotesContext.Provider>
    )
}