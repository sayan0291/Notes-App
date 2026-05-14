import SideBar from "../components/shared/SideBar"
import { AllNotes } from "../components/shared/AllNotes.jsx"

export const Home = () => {
    return(
        <div className="flex min-w-screen">
            <div className="flex w-full">
                <SideBar />
            </div>
        </div>
    )
}