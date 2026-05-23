import { Routes,Route } from "react-router-dom"
import { AllNotes } from "./components/shared/AllNotes.jsx"
import { NotesContextProvider } from "./Context/NotesContext/NotesContextProvider.jsx"
import { SideBar } from "./components/shared/SideBar.jsx"

export default function App(){

  return(
    <NotesContextProvider>
        <div className="flex">
          <SideBar />
          <Routes>
              <Route path="/" element={<AllNotes />} />
              <Route path="/library/all-notes" element={<AllNotes />} />
          </Routes>
        </div>
    </NotesContextProvider>
  )
}