import { Routes,Route } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout.jsx"
import { DashLayout } from "./components/layouts/DashLayout.jsx"
import { AuthLayout } from "./components/layouts/AuthLayout.jsx"
import { Hero } from "./pages/Hero.jsx"
import { AllNotes } from "./pages/AllNotes.jsx"
import { Editor } from "./pages/Editor.jsx"

export default function App(){

  return(
    <>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Hero />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="/library/all-notes" element={<AllNotes />} />
          <Route path="/library/all-notes" element={<AllNotes />} />
          <Route path="/library/all-notes" element={<AllNotes />} />
          <Route path="/library/all-notes" element={<AllNotes />} />
        </Route>
        <Route>
          <Route path="/library/all-notes" element={<AllNotes />} />
          <Route path="/library/all-notes" element={<AllNotes />} />
        </Route>
      </Routes>
    </>
  )
}