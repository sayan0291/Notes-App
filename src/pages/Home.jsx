import { Routes,Route } from "react-router-dom"
import SideBar from "../components/shared/SideBar"
import { AllNotes } from "../components/shared/AllNotes.jsx"

export const Home = () => {
    return(
        <div className="flex min-w-screen">
            <div className="flex w-full">
                <SideBar />
                <Routes>
                    <Route path="/" element={<AllNotes />} />
                    <Route path="/library/all-notes" element={<AllNotes />} />
                </Routes>
            </div>
        </div>
    )
}