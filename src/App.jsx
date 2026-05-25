import { Routes,Route } from "react-router-dom"
import { Navbar } from "./components/shared/Navbar.jsx"
import { AllNotes } from "./pages/AllNotes.jsx"
import { NotesContextProvider } from "./Context/NotesContext/NotesContextProvider.jsx"
import { SideBar } from "./components/shared/SideBar.jsx"
import { Editor } from "./pages/Editor.jsx"
import { UiProvider } from "./Context/UiContext.jsx"

export default function App(){

  return(
    <NotesContextProvider>
      <UiProvider>
        <Navbar />
        <div className="flex h-full">
          <SideBar />
          <Routes>
              <Route path="/" element={<AllNotes />} />
              <Route path="/library/all-notes" element={<AllNotes />} />
          </Routes>
        </div>
      </UiProvider>
    </NotesContextProvider>
  )
}