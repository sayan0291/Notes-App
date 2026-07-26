import { Routes,Route } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout.jsx"
import { DashLayout } from "./components/layouts/DashLayout.jsx"
import { AuthLayout } from "./components/layouts/AuthLayout.jsx"
import { Hero,NotesPage,Register,Login,Editor } from "./pages";

export default function App(){

  return(
    <>
      <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Hero />} />
          </Route>
          <Route element={<DashLayout />}>
            <Route path="/library/all-notes" element={<NotesPage data="allnote" />} />
            <Route path="/library/pinned" element={<NotesPage data="pincheck" />} />
            <Route path="/tags/work" element={<NotesPage data="work" />} />
            <Route path="/tags/personal" element={<NotesPage data="personal" />} />
            <Route path="/tags/ideas" element={<NotesPage data="ideas" />} />
            <Route path="/tags/study" element={<NotesPage data="study" />} />
            <Route path="/editor"  element={<Editor />} />
          </Route>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}