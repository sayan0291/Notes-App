import { Routes,Route } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout.jsx"
import { DashLayout } from "./components/layouts/DashLayout.jsx"
import { AuthLayout } from "./components/layouts/AuthLayout.jsx"
import { Hero } from "./pages/Hero.jsx"
import { NotesPage } from "./pages/NotesPage.jsx"
import { Editor } from "./pages/Editor.jsx"
import { Register } from "./pages/Register.jsx"
import { Login } from "./pages/Login.jsx"

export default function App(){

  return(
    <>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Hero />} />
        </Route>
        <Route element={<DashLayout />}>
          <Route path="/library/all-notes" element={<NotesPage />} />
          <Route path="/library/all-notes" element={<NotesPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}