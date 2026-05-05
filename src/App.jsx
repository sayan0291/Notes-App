import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import Notes from "./pages/Notes.jsx"
import Navbar from "./components/shared/Navbar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import { NotesContextProvider } from "./Context/NotesContext/NotesContextProvider.jsx"

export default function App(){

  return(
    <NotesContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </NotesContextProvider>
  )
}