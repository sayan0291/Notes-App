import React from "react";
import NotesContext from "./NotesContext";

export const NotesContextProvider = ({children}) => {
    const [notes,setNotes] = React.useState([]);

    return(
        <NotesContext.Provider value={{notes,setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}