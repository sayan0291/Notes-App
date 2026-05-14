import { Home } from "./pages/Home.jsx"
import { NotesContextProvider } from "./Context/NotesContext/NotesContextProvider.jsx"

export default function App(){

  return(
    <NotesContextProvider>
      <Home />
    </NotesContextProvider>
  )
}