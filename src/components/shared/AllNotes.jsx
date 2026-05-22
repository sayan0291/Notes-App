import Button from "../ui/Buttons.jsx"
import { ArrowDownUp } from "lucide-react"

export const AllNotes = () => {
    return (
        <div className="all-notes">
            <div className="all-notes-header">
                <h2>All notes</h2>
                <Button varient="filterBtn">
                    <ArrowDownUp />
                    <p className="hidden md:block">Date</p>
                </Button>
            </div>
        </div>
    )
}